//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { Suspense }             from "react"
import { useState }             from "react"
import { useEffect }            from "react"
import { useRef }               from "react"
import "./styles/Museum.scss"

import * as THREE               from 'three'
import { Canvas }               from "@react-three/fiber"
import { Text }                 from "@react-three/drei"
import { useLoader }            from '@react-three/fiber'
import { GLTFLoader }           from 'three/examples/jsm/loaders/GLTFLoader'
import { Plane }                from "@react-three/drei"
import { useTexture }           from '@react-three/drei'

import { Physics }              from '@react-three/cannon'

import JoyStick                 from "react-joystick"

import DatGui                   from 'react-dat-gui';
import { DatFolder }            from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatButton }            from 'react-dat-gui';
import "../Gui/Gui.scss"

import Camera                   from "./Camera"
import PhysicalSpace            from "./PhysicalSpace"

import Frames                   from "./Frames"
import Reflectors               from "./Reflectors"

import Chair                    from "./models/Chair"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Museum = (props) => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const museum    = useLoader(GLTFLoader, '/models/Museum/room/scene.gltf')
    const lamp      = useLoader(GLTFLoader, '/models/Museum/reflector/reflector.gltf')
    const sky       = useTexture('/models/Museum/textures/sky.jpeg')

    // DAT GUI State
    const defaultState = {
        posX: 0,
        posY: 0,
        posZ: 0
    }

    const [dat, setDat] = useState(defaultState)
    const [position, setPosition] = useState({x:0, y:0})

    const graphicsWorld = useRef()
    const physicsWorld  = useRef()
    const refDebug      = useRef()

    let debugDataLabel = '';
    let debugDataValue = '';

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

                    <DatFolder title={'Diploma Position'} closed={true}>
                        <DatNumber path='posX' label='X' min={-700} max={700} step={2.5}/>
                        <DatNumber path='posY' label='Y' min={-20} max={300} step={2.5}/>
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

                {/* Graphics World */}
                <group ref={graphicsWorld}>
                    {/* 3D Expo Room */}
                    <primitive object={museum.scene}
                                position={[0,0,0]}
                    />

                    {/* Sky */}
                    <Plane args={[1000,1000]}
                        position={[
                            -62.2,
                            400,
                            660
                        ]}
                        rotation={[
                            (-Math.PI /2),
                            0,
                            2.97191
                        ]}
                        scale={[
                            4.73,
                            4.73,
                            1.0
                        ]}
                    >
                        <meshStandardMaterial
                            attach="material"
                            map={sky}
                            color={"white"}
                            side={THREE.DoubleSide}
                        />
                    </Plane>

                    {/* Sky Lights */}
                    <pointLight
                        position={[
                            0,
                            200,
                            -40
                        ]}
                    />
                    <pointLight color={'white'}

                        position={[
                            -72.0,
                            -481.8,
                            652.4
                        ]}
                    />

                    {/* Diplomas */}
                    <Frames/>

                    {/* Ceiling Lights */}
                    <Reflectors
                        position={
                            [
                                455,
                                270,
                                537.5
                            ]
                        }
                    />

                    <Chair
                        position={[-105,0,-332.5]}
                        rotation={[0,-0.5,0]}

                    />

                    <Text
                        scale={1.5}
                        fontSize={1.0}
                        textAlign='justify'
                        maxWidth={200}
                        lineHeight={115}
                        font='Helvetica'
                        color="yellow"
                        anchorX="center"
                        anchorY="middle"
                    >
                        Databases
                    </Text>
                </group>

                {/* Physics World */}
                <group ref={physicsWorld}>
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

                        {/* Physic Constructs */}
                        <PhysicalSpace/>

                        {/* First Person Camera */}
                        <Camera target={graphicsWorld}
                                XY={position}
                                onDebug={(debugData) => dbug(debugData)}
                        />

                    </Physics>
                </group>

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
