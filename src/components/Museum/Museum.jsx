//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { Suspense }             from "react"
import { useState }             from "react"
import { useRef }               from "react"
import { useEffect }            from "react"
import "./styles/Museum.scss"

import { Canvas }               from "@react-three/fiber"
import { Stats }                from "@react-three/drei"
import { Physics }              from "@react-three/cannon"

import JoyStick                 from "react-joystick"

import Dat                      from "./Dat/Dat"
import Room                     from "./Room"
import Camera                   from "./Camera"

import Preloader                from "../Loader/Preloader"

import "./Museum.scss"



//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Museum = (props) => {

    //----------------------------------------------------------
    // Feature Flags Section
    //----------------------------------------------------------
    let STATS = false
    const isBrowser = (typeof window !== "undefined")
    console.log(isBrowser)


    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    // DAT GUI State
    const defaultState = {
        posX: 0,
        posY: 0,
        posZ: 0
    }

    const [dat, setDat]                     = useState(defaultState)
    const [ready, setReady]                 = useState(false)
    const [dbug, setDbug]                   = useState()
    const [canStartMusic, setCanStartMusic] = useState(true)


    const statsRef = isBrowser? useRef(document.createElement('div')) : ''

    const graphicsWorld = useRef()
    const room          = useRef()
    const cameraRef     = useRef()
    const bottomNav     = useRef()
    const test = useRef()



    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

        statsRef.current.id = 'statsParent'
        document.getElementsByClassName('diplomas')[0].appendChild(
            statsRef.current
        )
        statsRef.current.classList.add('stats-ref')

    }, [])


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const managerListener = (manager) => {
        manager.on('move', (e, stick) => {
            if (stick.angle)
            {
                cameraRef.current.setCoordinates(convertPosition(
                    stick?.distance,
                    stick?.angle?.radian
                ))
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
    const datUpdate = (data) => {
        setDat(data)
    }

    //----------------------------------------------------------
    const contentLoaded = () => {
        console.log('loaded')
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
            {/* DAT GUI (HTML) Render */}
            <Dat
                datUpdate={(data) => {
                    datUpdate(data)
                }}
            />

            {/* Stats */}
            {
                (dat.showStats) &&
                <Stats
                    className="stats"
                    parent={statsRef}
                    showPanel={0}
                    {...props}
                />
            }

            {/* 3D Render */}
            { isBrowser && (
                <Canvas
                    concurrent
                    onCreated={() => setReady(true)}
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
                            restitution: 0.1,
                            contactEquationStiffness: 1e9,
                            contactEquationRelaxation: 4,
                            frictionEquationStiffness: 1e7,
                            frictionEquationRelaxation: 2,
                        }}
                        allowSleep={false}
                        damping={1}
                    >

                        <Suspense fallback={
                            <Preloader
                                onFinishLoading={contentLoaded}
                            />
                        }>
                            {/* 3D Expo Room */}
                            <Room
                                ref={room}
                                position={[0,0,0]}
                                dat={dat}
                            />

                            {/* First Person Camera */}
                            <Camera
                                ref={cameraRef}
                                target={graphicsWorld}
                                quickTurn={0}
                                onDebug={(data) => setDbug(data)}
                            />
                        </Suspense>

                    </Physics>
                </Canvas>
            )}

            {/* Joystick */}
            {
                (ready===true) &&
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
                        onClick={() => cameraRef.current.quickTurn(-1)}/>
                </div>
            }
        </>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Museum
