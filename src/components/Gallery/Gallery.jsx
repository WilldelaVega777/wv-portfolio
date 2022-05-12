//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useState }         from "react"
import { useRef }           from "react"
import { Suspense }         from "react"

import { Canvas }           from "@react-three/fiber"
import { Physics }          from "@react-three/cannon"

import GalleryRoom          from "./models/GalleryRoom"
import Preloader            from "../Loader/Preloader"
import Camera               from "./Camera"
import JoyStick             from "react-joystick"

import "./styles/Gallery.scss"

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Gallery = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const isBrowser = (typeof window !== "undefined")

    const [ready, setReady]                 = useState(false)
    const [canStartMusic, setCanStartMusic] = useState(true)

    const room          = useRef()
    const cameraRef     = useRef()
    const bottomNav     = useRef()
    const cameraPhysics = useRef()


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const managerListener = (manager) => {
        manager.on('move', (e, stick) => {
            if (stick.angle)
            {
                cameraRef.current.setCoordinates(
                    convertPosition(
                        stick?.distance,
                        stick?.angle?.radian
                    )
                )
            }
        })
        manager.on('end', () => {
            cameraRef.current.setCoordinates({
                x:0,
                y:0
            })
        })
    }

    //----------------------------------------------------------
    const onLoaded = () => {
        setReady(true)
    }

    //----------------------------------------------------------
    const onRendered = () => {
        bottomNav.current.classList.remove('hidden')
        bottomNav.current.classList.add('visible')
    }

    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const convertPosition = (distanceFromCenter, angle) => {
        let xPos = (((Math.cos(angle) * distanceFromCenter) * 2) / 100)
        let yPos = (((Math.sin(angle) * distanceFromCenter) * 2) / 100)
        return { x: xPos.toFixed(2), y: yPos.toFixed(2) }
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            { isBrowser && (
                <Canvas
                    className="gallery"
                    concurrent={true}
                    onCreated={onLoaded}
                    gl={{
                        antialias: true,
                        premultipliedAlpha: false,
                        stencil: false,
                        powerPreference: "high-performance"
                    }}
                >
                    {/* Physics World */}
                    <Physics
                        gravity={[0, -980, 0]}
                        iterations={20}
                        tolerance={0.0001}
                        defaultContactMaterial={{
                            friction: 0.1,
                            restitution: 0.01,
                            contactEquationStiffness: 1e9,
                            contactEquationRelaxation: 4,
                            frictionEquationStiffness: 1e7,
                            frictionEquationRelaxation: 2,
                        }}
                        allowSleep={false}
                        damping={1}
                    >
                        <Suspense fallback={
                            <Preloader/>
                        }>

                            {/* Room Model */}
                            <GalleryRoom
                                ref={room}
                                position={[0,0,0]}
                            />

                            {/* First Person Camera */}
                            <Camera
                                ref={cameraRef}
                                lookAt={room}
                                target={room}
                                quickTurn={0}
                                rendered={onRendered}
                            />
                        </Suspense>

                    </Physics>
                </Canvas>
            )}

            {/* Joystick */}
            { ready &&
            <div
                ref={bottomNav}
                className="bottom-nav hidden"
                onPointerDown={() => {
                    if (canStartMusic)
                    {
                        room.current.startMusic()
                        setCanStartMusic(false)
                    }
                }
            }>
                <JoyStick
                    options={{
                            mode: 'static',
                            catchDistance: 150,
                            color: 'white',
                            follow: false,
                            position: {top: '55px', left: '75px'},
                            multitouch: false,
                            style: {
                                border: '1px solid'
                            }
                        }}
                        containerStyle={{
                            width: '150px',
                            height: '118px',
                            position: 'relative',
                            background: 'rgba(0,0,0,0)'
                        }}
                        managerListener={(manager) => managerListener(manager)}
                />
                <div
                    className="ctrl-left"
                    onClick={() => cameraRef.current.quickTurn(1)}
                />
                <div
                    className="ctrl-right"
                    onClick={() => cameraRef.current.quickTurn(-1)}
                />
            </div>
            }
        </>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Gallery
