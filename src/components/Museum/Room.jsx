//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import * as THREE           from 'three'
import { useRef }           from 'react'
import { useTexture }       from '@react-three/drei'
import { useGLTF }          from '@react-three/drei'
import { Plane }            from "@react-three/drei"
import { PositionalAudio }  from '@react-three/drei'

import PhysicalSpace        from "./PhysicalSpace"

import Frames               from "./Frames"
import Reflectors           from "./Reflectors"
import Chair                from "./models/Chair"
import Signs                from "./Signs"
import Doryphoros           from "./models/Doryphoros"
import Slave                from "./models/Slave"
import Baluster             from "./models/Baluster"
import Techichi             from "./models/Techichi"
import Speaker              from "./models/Speaker"
import WV                   from "./models/WV"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Room = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group     = useRef()

    const audioRef  = useRef()

    const sky       = useTexture('/models/Museum/textures/sky.jpeg')

    const { nodes, materials } =
        useGLTF('/models/Museum/room/scene.gltf')



    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>

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



            {/* Interior */}
            <group
                ref={group}
                {...props}
                dispose={null}
            >
                <group
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <group
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group
                            rotation={[-Math.PI / 2, 0, 0]}
                        >

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['floor_02_-_Default_0'].geometry}
                            material={materials['02_-_Default']}
                        />
                        </group>
                        <group
                            position={[0, 150, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        >
                            <group
                                position={[0, 0, -150]}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes['walls_01_-_Default_0'].geometry}
                                >
                                    <meshStandardMaterial color={'black'}/>
                                </mesh>
                            </group>
                        </group>
                        <group
                            position={[-300, 135, -388.53]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        >
                            <group
                                position={[0, 0, -135]}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Box005_vray_Walls_0.geometry}
                                    material={materials.vray_Walls}
                                />
                            </group>
                        </group>
                        <group position={[-473, 135.03, -1167.24]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.wood_wood_0.geometry}
                                material={materials.wood}
                            />
                        </group>
                        <group position={[-550, 396.01, -675.69]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes['window_03_-_Default_0'].geometry}
                                material={materials['03_-_Default']}
                            />
                        </group>
                    </group>
                </group>

            </group>

            {/* Sky Lights */}
            <pointLight
                position={[
                    0,
                    500,
                    80
                ]}
            />
            <pointLight color={'white'}

                position={[
                    -72.0,
                    -481.8,
                    652.4
                ]}
                intensity={0.3}
            />

            {/* Physical Constructs */}
            <PhysicalSpace/>

            {/* Diplomas */}
            <Frames/>

            {/* Ceiling Reflectors */}
            <Reflectors/>

            {/* Chair */}
            <Chair
                position={[-652.5,0,355]}
                rotation={[0,-5.0,0]}
            />


            {/* Signs */}
            <Signs/>


            {/* Doryphoros */}
            <Doryphoros
                position={[-637,0,-972.5]}
                rotation={[0,(Math.PI /4), 0]}
            />


            {/* Slave */}
            <Slave
                position={[455,97.5,-1002.5]}
            />


            {/* Balusters */}
            <Baluster
                position={[-647.5,-40,567.5]}
            />
            <Baluster
                position={[-664,-40,120]}
            />

            {/* Techichi */}
            <Techichi
                position={[-657.5,15,270]}
                rotation={[0,(-Math.PI / 1.5),0]}
            />

            {/* WV */}
            <WV
                position={[37.5,90,-1032.5]}
                rotation={[(Math.PI /2), 0, 0]}
                scale={[10,10,10]}
            />

            <group>
                <Speaker
                    position={[-80,-2.5,-987.5]}
                    rotation={[0,((Math.PI /2) + .2),0]}
                    scale={[30,30,30]}
                />

                <Speaker
                    onClick={() => {audioRef.current.play()}}
                    position={[220,-2.5,-942.5]}
                    rotation={[0,((Math.PI /2) -.5),0]}
                    scale={[30,30,30]}
                />

                <PositionalAudio
                    ref={audioRef}
                    url="/audio/soundtrack.mp3"
                    distance={1000}
                    loop
                    {...props}
                />
            </group>

        </>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload('/models/Museum/room/scene.gltf')


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Room
