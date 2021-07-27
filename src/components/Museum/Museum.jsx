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
import { OrbitControls }        from "@react-three/drei"
import { useTexture }           from '@react-three/drei'
import JoyStick                 from "react-joystick"

import DatGui                   from 'react-dat-gui';
import { DatFolder }            from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatButton }            from 'react-dat-gui';
import "../Gui/Gui.scss"

import { useHelper }            from "@react-three/drei"
import { AxesHelper }           from "@react-three/fiber"

import Camera                   from "../Camera/Camera"


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
        posY: -360,
        posZ: 55,
        rotX: (Math.PI * .40),
        rotY: 0,
        rotZ: (Math.PI * .25),
        scX: 1.0,
        scY: 1.0,
        scZ: 1.0,
        lPosX: 0,
        lPosY: -360,
        lPosZ: 55
    }
    const [dat, setDat] = useState(defaultState)
    const [angle, setAngle] = useState('')
    const [direction, setDirection] = useState('')



    //----------------------------------------------------------
    // Life Cycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

    }, [])


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const managerListener = (manager) => {
        manager.on('move', (e, stick) => {
            setAngle(stick?.angle?.radian)
        })
        manager.on('dir', (e, stick) => {
            setDirection(stick?.direction?.angle)
        })
        manager.on('end', () => {
            console.log('I ended')
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
    // Render Section
    //----------------------------------------------------------
    return (
        <Suspense fallback={
            <Canvas>
                <Text color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    Loading...
                </Text>
            </Canvas>
        }>

            {/* GUI (HTML) Render */}
            <figure>
                <DatGui data={dat}
                        onUpdate={(e) => handleUpdate(e)}
                        style={{zIndex:9999, left: 0 + 'px'}}
                        labelWidth={'10%'}
                >
                    <DatFolder title={'Sky Position'} closed={true}>
                        <DatNumber path='posX' label='X' min={-500} max={1000} step={0.1}/>
                        <DatNumber path='posY' label='Y' min={-500} max={1000} step={0.1}/>
                        <DatNumber path='posZ' label='Z' min={-500} max={1000} step={0.1}/>
                    </DatFolder>
                    <DatFolder title={'Sky Rotation'} closed={true}>
                        <DatNumber path='rotX' label='X' min={-(Math.PI * 2)} max={(Math.PI * 2)} step={0.00001}/>
                        <DatNumber path='rotY' label='Y' min={-(Math.PI * 2)} max={(Math.PI * 2)} step={0.00001}/>
                        <DatNumber path='rotZ' label='Z' min={-(Math.PI * 2)} max={(Math.PI * 2)} step={0.00001}/>
                    </DatFolder>
                    <DatFolder title={'Sky Scale'} closed={true}>
                        <DatNumber path='scX' label='X' min={1} max={20} step={0.01}/>
                        <DatNumber path='scY' label='Y' min={1} max={20} step={0.01}/>
                        <DatNumber path='scZ' label='Z' min={4} max={20} step={0.01}/>
                    </DatFolder>
                    <DatFolder title={'2nd Light Position'} closed={true}>
                        <DatNumber path='lPosX' label='X' min={-500} max={1000} step={0.1}/>
                        <DatNumber path='lPosY' label='Y' min={-500} max={1000} step={0.1}/>
                        <DatNumber path='lPosZ' label='Z' min={-500} max={1000} step={0.1}/>
                    </DatFolder>
                    <DatButton label='Save Data' onClick={() => { SaveDatGui() }}/>
                    <DatButton label='Load Data' onClick={async () => { await LoadDatGui() }}/>
                </DatGui>
                <div>
                <div className="debug">
                        Angle: { angle }
                        <p/>
                        Direction: { direction }
                    </div>
                </div>

            </figure>


            {/* 3D Render */}
            <Canvas>

                {/* First Person Camera */}
                <Camera position={[0,0,0]}/>

                {/* World */}
                <group>
                    <primitive object={museum.scene}
                                position={[0,-174,-50]}
                    />

                    <Plane args={[1000,1000]}
                        position={[
                            -62.2,
                            242.6,
                            661.9
                        ]}
                        rotation={[
                            1.614,
                            0,
                            2.97191
                        ]}
                        scale={[
                            4.73,
                            4.73,
                            1.0
                        ]}
                    >
                        <meshStandardMaterial attach="material" map={sky} color={"white"} side={THREE.DoubleSide}/>
                    </Plane>

                    <pointLight
                        position={[
                            dat.posX,
                            (dat.posY - 200),
                            (dat.posZ + 180)
                        ]}
                    />
                    useHelper(point, AxesHelper, 'cyan')
                    <pointLight color={'white'}

                        position={[
                            -72.0,
                            -481.8,
                            652.4
                        ]}
                    />
                </group>


                <OrbitControls
                    enableZoom={false}
                    enablePosition={false}
                    enableRotation={true}
                    maxPolarAngle={(Math.PI /2) * 0.85}
                    minPolarAngle={Math.PI/2}
                />

            </Canvas>

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
