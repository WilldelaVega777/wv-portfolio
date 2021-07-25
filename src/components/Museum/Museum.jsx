//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { useRef }               from "react"
import { Suspense }             from "react"
import "./Museum.scss"

import * as THREE               from 'three'
import { Canvas }               from "@react-three/fiber"
import { Text }                 from "@react-three/drei"
import { useLoader }            from '@react-three/fiber'
import { GLTFLoader }           from 'three/examples/jsm/loaders/GLTFLoader'
import { PerspectiveCamera }    from "@react-three/drei"
import JoyStick                 from "react-joystick"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Museum = () => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    let museum = useLoader(GLTFLoader, '/models/Museum/scene.gltf')
    const cameraRef = useRef()

    const joyOptions = {
        mode: 'static',
        catchDistance: 150,
        color: 'white',
        follow: true,
        zone: 'section',
        position: {top: '55px', left: '75px'}
    }
    const containerStyle = {
        width: '150px',
        height: '180px',
        position: 'relative',
        background: 'rgba(0,0,0,0)'
    }
    let e


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const managerListener = (manager) => {
        manager.on('move', (e, stick => {
            console.log('I moved')
        }))
        manager.on('end', () => {
            console.log('I ended')
        })
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
            <Canvas>

                <PerspectiveCamera makeDefault
                                ref={cameraRef}
                >
                    <group>
                        <primitive object={museum.scene}
                                    position={[0,-174,0]}
                        />

                        {/* Donde está? */}
                        <mesh position={[0,-180,50]}>
                            <planeGeometry attach="geometry" args={[100,100]}/>
                            <meshStandardMaterial color={'red'} side={THREE.DoubleSide}/>
                        </mesh>
                    </group>
                </PerspectiveCamera>

            </Canvas>
            <div className="bottom-nav">
                <JoyStick options={joyOptions}
                          containerStyle={containerStyle}
                          managerListener={managerListener}
                />
            </div>
        </Suspense>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Museum
