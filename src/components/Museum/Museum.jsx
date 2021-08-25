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
import { Center }               from "@react-three/drei"
import { Preload }              from "@react-three/drei"
import { Stage }                from "@react-three/drei"
import { Physics }              from "@react-three/cannon"

import JoyStick                 from "react-joystick"

import Dat                      from "./Dat/Dat"
import Room                     from "./Room"
import Camera                   from "./Camera"

import Techichi                 from "./models/Techichi"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Museum = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    // DAT GUI State
    const defaultState = {
        posX: 0,
        posY: 0,
        posZ: 0
    }

    const [dat, setDat]                 = useState(defaultState)

    const [ready, setReady]             = useState(false)
    const [quickTurn, setQuickTurn]     = useState(0)
    const [dbug, setDbug]               = useState()

    const graphicsWorld = useRef()
    const statsRef      = useRef(document.createElement('div'))

    const cameraRef     = useRef()


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
    const handleQuickTurn = (direction) => {
        setQuickTurn(direction)
    }

    //----------------------------------------------------------
    const datUpdate = (data) => {
        setDat(data)
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
        <Suspense fallback={
            <Canvas>
                {/* Fallback GUI */}
                <Stage>
                    <Center>
                        <Techichi/>
                    </Center>
                </Stage>
                <Preload all/>
            </Canvas>
        }>

            {/* DAT GUI (HTML) Render */}
            <Dat
                datUpdate={(data) => {
                    datUpdate(data)
                }}
                debug={dbug}
            />

            {/* Stats */}
            <Stats
                className="stats"
                parent={statsRef}
                showPanel={0}
                {...props}
            />

            {/* 3D Render */}
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

                    {/* 3D Expo Room */}
                    <Room
                        position={[0,0,0]}
                        posDebug={[dat.posX, dat.posY, dat.posZ]}
                    />

                    {/* First Person Camera */}
                    <Camera
                        ref={cameraRef}
                        target={graphicsWorld}
                        quickTurn={quickTurn}
                        onDebug={(data) => setDbug(data)}
                    />

                </Physics>
            </Canvas>

            {/* Joystick */}
            {
                (ready===true) &&
                <div className="bottom-nav">
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

        </Suspense>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Museum
