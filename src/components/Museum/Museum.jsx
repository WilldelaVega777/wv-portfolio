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
import { useEffect }            from "react"
import { useRef }               from "react"
import "./styles/Museum.scss"

import { Canvas }               from "@react-three/fiber"
import { Text }                 from "@react-three/drei"
import { Stats }                from "@react-three/drei"
import { Physics }              from '@react-three/cannon'

import JoyStick                 from "react-joystick"

import DatGui                   from 'react-dat-gui';
import { DatFolder }            from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatButton }            from 'react-dat-gui';
import "../Gui/Gui.scss"

import Room                     from "./Room"
import Camera                   from "./Camera"




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

    const [dat, setDat] = useState(defaultState)
    const [position, setPosition] = useState({x:0, y:0})

    const graphicsWorld = useRef()
    const refDebug      = useRef()

    //const node = useRef(useStore(state => state.diplomasContainer))

    let debugDataLabel = '';
    let debugDataValue = '';


    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

        // OnMount
        //node.current.id = 'fps'
        //document.appendChild(node.current)

        // OnUnMount
        //return () => document.removeChild(node.current)

    }, [])

    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const managerListener = (manager) => {
        manager.on('move', (e, stick) => {
            if (stick.angle)
            {
                setPosition(convertPosition(
                        stick?.distance,
                        stick?.angle?.radian
                    )
                )
            }
        })
        manager.on('end', () => {
            setPosition({y: 0, x: 0})
        })
    }
    //----------------------------------------------------------
    const handleUpdate = (newData) => {
        setDat({
            ...dat,
            ...newData
        })
    }

    //----------------------------------------------------------
    const SaveDatGui = () => {
       localStorage.setItem('dat', JSON.stringify(dat))
    }

    //----------------------------------------------------------
    const LoadDatGui = async () => {
        const storedState = await JSON.parse(localStorage.getItem('dat'))
        setDat(storedState ? storedState : defaultState)
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
    const toggleMusic = () => {
        alert('demo')
    }

    //----------------------------------------------------------
    const dbug = (debugData) => {
        refDebug.current.innerHTML =
            `${debugData.dataLabel}: &nbsp; ${debugData.dataValue}`
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Suspense fallback={
            <Canvas>
                <Text color="white"
                    anchorX="center"
                    anchorY="middle"
                    size="large"
                >
                    Loading...
                </Text>
            </Canvas>
        }>

            {/* DAT GUI (HTML) Render */}
            <figure>
                <DatGui data={dat}
                        onUpdate={(e) => handleUpdate(e)}
                        style={{zIndex:9999, left: 0 + 'px'}}
                        labelWidth={'10%'}
                >

                    <DatFolder title={'Sign Position'} closed={true}>
                        <DatNumber path='posX' label='X' min={-700} max={700} step={2.5}/>
                        <DatNumber path='posY' label='Y' min={-60} max={300} step={2.5}/>
                        <DatNumber path='posZ' label='Z' min={-1200} max={1200} step={2.5}/>
                    </DatFolder>

                    <DatButton label='Save Position Data' onClick={() => { SaveDatGui() }}/>
                    <DatButton label='Load Position Data' onClick={async () => { await LoadDatGui() }}/>

                </DatGui>
                <div className="debug-container">
                    <div ref={refDebug} className="debug">
                        {`${debugDataLabel}: ${debugDataValue}`}
                        <p/>
                        {`Position Y: ${position.y}`}
                    </div>
                </div>

            </figure>


            {/* 3D Render */}
            <Canvas>
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
                        toggleSound={() => toggleMusic()}
                    />


                    {/* First Person Camera */}
                    <Camera target={graphicsWorld}
                            XY={position}
                            onDebug={(debugData) => dbug(debugData)}
                    />

                </Physics>

                <Stats
                    showPanel={0} // Start-up panel (default=0)
                    className="stats" // Optional className to add to the stats container dom element
                    {...props} // All stats.js props are valid
                />


            </Canvas>

            {/* Joystick */}
            <div className="bottom-nav">
                <JoyStick options={{
                            mode: 'static',
                            catchDistance: 150,
                            color: 'white',
                            follow: true,
                            position: {top: '55px', left: '75px'}
                        }}
                        containerStyle={{
                            width: '150px',
                            height: '118px',
                            position: 'relative',
                            background: 'rgba(0,0,0,0)'
                        }}
                        managerListener={(manager) => managerListener(manager)}
                />
            </div>

        </Suspense>

    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Museum
