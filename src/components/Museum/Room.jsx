//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import * as THREE               from 'three'
import { useRef }               from 'react'
import { forwardRef }           from 'react'
import { useImperativeHandle }  from "react"
import { useFrame }             from '@react-three/fiber'
import { useTexture }           from '@react-three/drei'
import { useGLTF }              from '@react-three/drei'
import { Plane }                from "@react-three/drei"
import { PositionalAudio }      from '@react-three/drei'

import PhysicalSpace            from "./PhysicalSpace"

import Frames                   from "./Frames"
import Reflectors               from "./Reflectors"
import Chair                    from "./models/Chair"
import Signs                    from "./Signs"
import Doryphoros               from "./models/Doryphoros"
import Slave                    from "./models/Slave"
import Techichi                 from "./models/Techichi"
import Speaker                  from "./models/Speaker"
import WV                       from "./models/WV"
import Bystander                from "./models/Bystander"
import Column                   from "./models/Column"
import MarcusAurelius           from "./models/MarcusAurelius"
import Coin                     from "./models/Coin"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Room = forwardRef((props, ref) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group     = useRef()
    const audioRef  = useRef()
    const refLight  = useRef()

    const sky       = useTexture('/models/Museum/textures/sky.jpeg')

    const { nodes, materials } =
        useGLTF('/models/Museum/room/scene.gltf')


    //----------------------------------------------------------
    // Ref Component Extension Section
    //----------------------------------------------------------
    useImperativeHandle(ref, () => ({

        startMusic()
        {
            if (!audioRef.current.isPlaying)
            {
                audioRef.current.play()
            }
        }

    }))

    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const toggleMusic = () => {
        if (!audioRef.current.isPlaying)
        {
            audioRef.current.play()
        }
        else
        {
            audioRef.current.pause()
        }
    }


    //----------------------------------------------------------
    // Animation Section
    //----------------------------------------------------------
    useFrame(({clock}) => {

        const eTime  = clock.getElapsedTime()
        const speed  = 0.1
        const radiusV = 1500
        const radiusH = 700

        refLight.current.position.set(
            (Math.cos(eTime * speed) * radiusH),
            -1000 + (Math.sin(eTime * speed) * radiusV),
            0
        )

    })

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
            <group ref={refLight}>
                <pointLight
                    position={[
                        0,
                        400,
                        -400
                    ]}
                    intensity={0.3}
                />
                <pointLight
                    position={[
                        0,
                        400,
                        100
                    ]}
                    intensity={0.3}
                />
                <pointLight
                    position={[
                        0,
                        400,
                        300
                    ]}
                    intensity={0.3}
                />
            </group>

            <pointLight
                position={[
                    0,
                    300,
                    -400
                ]}
                intensity={0.19}
            />
            <pointLight
                position={[
                    0,
                    300,
                    100
                ]}
                intensity={0.19}
            />
            <pointLight
                position={[
                    0,
                    300,
                    600
                ]}
                intensity={0.19}
            />


            {/* Physical Constructs */}
            <PhysicalSpace/>

            {/* Diplomas */}
            <Frames/>

            {/* Ceiling Reflectors */}
            <Reflectors
                intensityMagenta={props.dat.magentaLight}
                intensityNavy={props.dat.blueLight}
                motionSpeed={props.dat.motionSpeed}
            />

            {/* Chair */}
            <Chair
                position={[-652.5,0,80]}
                rotation={[0,6.7,0]}
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
            {/*
            <Baluster
                position={[-647.5,-40,567.5]}
            />
            <Baluster
                position={[-664,-40,120]}
            />
            */}

            {/* Techichi */}
            <Techichi
                position={[-630,15,-20]}
                rotation={[0,(-Math.PI / 1.5),0]}
            />

            {/* WV */}
            <WV
                position={[37.5,150,-1032.5]}
                scale={[35,35,35]}
            />

            <group onClick={() => toggleMusic()}>
                <Speaker
                    position={[-80,-2.5,-987.5]}
                    rotation={[0,((Math.PI /2) + .2),0]}
                    scale={[30,30,30]}
                />

                <Speaker
                    position={[220,-2.5,-942.5]}
                    rotation={[0,((Math.PI /2) -.5),0]}
                    scale={[30,30,30]}
                />

                <PositionalAudio
                    ref={audioRef}
                    url="/audio/soundtrack.mp3"
                    distance={1000}
                    volume={.5}
                    loop
                    {...props}
                />
            </group>

            {/* Bystander */}
            <Bystander
                position={[0,0,0]}
                scale={[125,125,125]}
            />

            {/* Columns */}
            <Column
                position={[180,0,960]}
                scale={[10,10,10]}
            />
            <MarcusAurelius
                position={[180,166,960]}
                rotation={[0,Math.PI,0]}
                scale={[0.1,0.1,0.1]}
            />
            <Column
                position={[-120,0,960]}
                scale={[10,10,10]}
            />
            <Coin
                position={[-40,150,1045]}
                scale={[5,5,5]}
            />
            <Column
                position={[-630,0,370]}
                scale={[10,10,10]}
            />
        </>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload('/models/Museum/room/scene.gltf')
})


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Room
