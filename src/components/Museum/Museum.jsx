//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { useEffect }            from "react"
import { useRef }               from "react"
import { Suspense }             from "react"
import "./Museum.scss"

import * as THREE               from 'three'
import { Canvas }               from "@react-three/fiber"
import { Text }                 from "@react-three/drei"
import { useLoader }            from '@react-three/fiber'
import { GLTFLoader }           from 'three/examples/jsm/loaders/GLTFLoader'
import { Plane }                from "@react-three/drei"
import { useTexture }           from '@react-three/drei'

import { Physics }              from '@react-three/cannon'
import { Debug }                from '@react-three/cannon'
import { usePlane }             from '@react-three/cannon'
import { useBox }               from '@react-three/cannon'
import { useSphere }            from '@react-three/cannon'

import JoyStick                 from "react-joystick"

import DatGui                   from 'react-dat-gui';
import { DatFolder }            from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatButton }            from 'react-dat-gui';
import "../Gui/Gui.scss"

import Camera                   from "../Camera/Camera"
import Floor                    from "./Floor/Floor"
import Wall                     from "./Wall/Wall"

import { Cubito } from './Cubito'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Museum = (props) => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const museum    = useLoader(GLTFLoader, '/models/Museum/scene.gltf')
    const sky       = useTexture('/models/Museum/sky.jpeg')


    // DAT GUI State
    const defaultState = {
        posX: 0,
        posY: 0,
        posZ: 0,
        sizeX: 1.0,
        sizeY: 1.0,
        sizeZ: 1.0
    }

    const [dat, setDat] = useState(defaultState)
    const [position, setPosition] = useState({x:0, y:0})

    const world = useRef()
    const physicalWalls = useRef()


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

                    <DatFolder title={'Wall Position'} closed={false}>
                        <DatNumber path='posX' label='X' min={-700} max={700} step={5}/>
                        <DatNumber path='posY' label='Y' min={-20} max={180} step={5}/>
                        <DatNumber path='posZ' label='Z' min={-1200} max={1200} step={5}/>
                    </DatFolder>

                    <DatFolder title={'Wall Size'} closed={false}>
                        <DatNumber path='sizeX' label='X' min={1} max={1800} step={1}/>
                        <DatNumber path='sizeY' label='Y' min={1} max={400} step={1}/>
                        <DatNumber path='sizeZ' label='Z' min={4} max={2000} step={5}/>
                    </DatFolder>

                    <DatButton label='Save Data' onClick={() => { SaveDatGui() }}/>
                    <DatButton label='Load Data' onClick={async () => { await LoadDatGui() }}/>

                </DatGui>
                <div className="debug-container">
                    <div className="debug">
                        {`Position X: ${position.x}`}
                        <p/>
                        {`Position Y: ${position.y}`}
                    </div>
                </div>

            </figure>


            {/* 3D Render */}
            <Canvas>
                <Physics iterations={20}
                        tolerance={0.0001}
                        defaultContactMaterial={{
                            friction: 0.9,
                            restitution: 0.7,
                            contactEquationStiffness: 1e7,
                            contactEquationRelaxation: 1,
                            frictionEquationStiffness: 1e7,
                            frictionEquationRelaxation: 2,
                        }}
                        gravity={[0, -40, 0]}
                        allowSleep={false}
                    >
                    <Debug>
                    {/* First Person Camera */}
                    <Camera target={world}
                            XY={position}
                    />

                    {/* World */}
                    <group ref={world}>
                        <primitive object={museum.scene}
                                    position={[0,0,0]}
                        />

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

                        {/* Floor */}
                        <Floor/>


                        {/* Physics Walls */}

                        {/* Right Wall 1 */}
                        <Wall position={[385,120,-200]}
                              args={[366,240,15]}
                        />

                    </group>


                    </Debug>
                </Physics>

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
                            height: '180px',
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
