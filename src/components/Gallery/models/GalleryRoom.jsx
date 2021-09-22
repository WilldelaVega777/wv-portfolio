//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import { useRef }               from 'react'
import { forwardRef }           from 'react'
import { useImperativeHandle }  from "react"
import { useGLTF }              from '@react-three/drei'
import { Environment }          from "@react-three/drei"
import { PositionalAudio }      from "@react-three/drei"

import PhysicalSpace            from "../PhysicalSpace"
import Lamp                     from "../Lamp"
import Reflector                from "../../Museum/models/Reflector"
import Speaker                  from "../../Museum/models/Speaker"
import MeshSign                 from "../../Museum/MeshSign"
import Baluster                 from "../../Museum/models/Baluster"
import Brochure                 from "../Brochure"
import Frame                    from "../Frame"
import WV                       from "../../Museum/models/WV"

import linkedin                 from '../textures/LinkedInJSGrade.png'
import angular                  from '../textures/AngularGrade.png'

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const GalleryRoom = forwardRef((props, ref) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group     = useRef()
    const audioRef  = useRef()

    const { nodes, materials } =
        useGLTF('/models/Gallery/Gallery.gltf')


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
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            {/* Lights */}
            <ambientLight intensity={0.1}/>

            {/* Lamps */}
            <Lamp
                position={[-10,140,12]}
                color="brown"
                intensity={18}
                distance={180}
                angle={Math.PI * 0.2}
            />

            <Lamp
                position={[-58.5,140,-75]}
                color="navy"
                intensity={18}
                distance={160}
            />

            <Lamp
                position={[-124,140,-75]}
                color="darkmagenta"
                intensity={18}
                distance={148}
            />

            <Lamp
                position={[-189,140,-75]}
                color="navy"
                intensity={18}
                distance={160}
            />

           <Lamp
                position={[-58.5,140,-17]}
                color="navy"
                intensity={18}
                distance={160}
            />

           <Lamp
                position={[-59,140,42]}
                color="navy"
                intensity={18}
                distance={148}
            />

           <Lamp
                position={[-59,140,100]}
                color="navy"
                intensity={18}
                distance={160}
            />

           <Lamp
                position={[-124,140,-17]}
                color="navy"
                intensity={18}
                distance={160}
            />

           <Lamp
                position={[-124,140,42]}
                color="navy"
                intensity={18}
                distance={148}
            />

           <Lamp
                position={[-124,140,100]}
                color="navy"
                intensity={18}
                distance={160}
            />

            <Lamp
                position={[-189,140,-17]}
                color="navy"
                intensity={18}
                distance={148}
            />

            <Lamp
                position={[-189,140,42]}
                color="navy"
                intensity={18}
                distance={160}
            />

            <Lamp
                position={[-189,140,100]}
                color="navy"
                intensity={18}
                distance={160}
            />
            <group>
                <Lamp
                    position={[-254.5,140,-75]}
                    color="navy"
                    intensity={18}
                    distance={160}
                    radius={.2}
                />

                <Lamp
                    position={[-254.5,140,-17]}
                    color="darkmagenta"
                    intensity={18}
                    distance={160}
                    radius={.2}
                />

                <Lamp
                    position={[-254.5,140,42]}
                    color="navy"
                    intensity={18}
                    distance={160}
                    radius={.2}
                />

                <Lamp
                    position={[-254.5,140,100]}
                    color="darkmagenta"
                    intensity={18}
                    distance={160}
                    radius={.2}
                />
            </group>

            <group>
                <Reflector
                    position={[-150,120,20]}
                    scale={[40,40,40]}
                    targetRotationH={0.125}
                    targetRotationV={2.4}
                    distance={600}
                    intensity={.5}
                    color='white'
                    speed={1.8}
                />
                <Reflector
                    position={[-150,120,-20]}
                    scale={[40,40,40]}
                    targetRotationH={0.125}
                    targetRotationV={2.5}
                    distance={600}
                    intensity={.5}
                    color='white'
                    speed={1.5}
                />
                <pointLight
                    position={[-150,120,-0]}
                    intensity={0.5}
                />
            </group>

            <MeshSign
                position={[-280, 90, 57]}
                rotation={[0,(Math.PI /2),0]}
                scale={[25,25,25]}
                file='thanks'
                noTextures
            />

            <Baluster
                position={[-270, -20, 150]}
                scale={[100,100,100]}
            />

            <Baluster
                position={[-270, -20, -60]}
                scale={[100,100,100]}
            />

            <WV position={[-289, 60, 10]}
                rotation={[0,(Math.PI /2),0]}
                scale={[20,20,20]}
                standard={true}
            />

            <group onClick={() => toggleMusic()}>
                <Speaker
                    position={[40,0,-60]}
                    scale={[10,10,10]}

                />

                <PositionalAudio
                    ref={audioRef}
                    position={[40,0,-60]}
                    url="/audio/soundtrack.mp3"
                    distance={10}
                    loop
                    {...props}
                />

                <Speaker
                    position={[40,0,0]}
                    scale={[10,10,10]}
                    rotation={[0,(-Math.PI /6),0]}

                />
            </group>

            <Brochure
                position={[-156.5,64.2,129]}
                rotation={[0,Math.PI,0]}
                scale={[1.5,1.5,1.5]}
            />

            <Frame
                content={linkedin}
                position={[-214.7,64.1,-104]}
                scale={[1.5,1.5,1.5]}
            />

            <Frame
                content={angular}
                position={[-108.7,64.1,-104]}
                scale={[1.5,1.5,1.5]}
            />


            {/* Interior */}
            <group ref={group} {...props} dispose={null}>
                <Environment
                    preset="night"
                    background
                />
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-12.43, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.floor_Floor_Satin_0.geometry}
                                material={materials.Floor_Satin}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.floor_Grassblade_0.geometry}
                                material={materials.Grassblade}
                            />
                            <mesh castShadow receiveShadow geometry={nodes.floor_Plaster_0.geometry} material={materials.Plaster} />
                            <mesh castShadow receiveShadow geometry={nodes.floor_Soil_0.geometry} material={materials.Soil} />
                        </group>
                        <group position={[181.47, 75.42, 100.72]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh castShadow receiveShadow geometry={nodes.glass_glass_0.geometry} material={materials.glass} />
                        </group>
                        <group position={[-61.39, 64.08, -105.73]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh castShadow receiveShadow geometry={nodes.paintings_A_0.geometry} material={materials.material} />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_C_0.geometry} material={materials.material_11} />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.paintings_Carpet_Soft_Rug_Dark_Grey_Pattern_2_0.geometry}
                                material={materials.Carpet_Soft_Rug_Dark_Grey_Pattern_2}
                            />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_D_0.geometry} material={materials.material_14} />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_E_0.geometry} material={materials.material_15} />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_F_0.geometry} material={materials.material_13} />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_floor_0.geometry} material={materials.floor} />
                            <mesh castShadow receiveShadow geometry={nodes.paintings_G_0.geometry} material={materials.material_12} />
                        </group>
                        <group position={[-24.52, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh castShadow receiveShadow geometry={nodes.stairs_stairs_0.geometry} material={materials.stairs} />
                        </group>
                        <group position={[184.42, 149.86, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.steel_Acrylic_Black_0.geometry}
                                material={materials.Acrylic_Black}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.steel_Aluminium_Black_0.geometry}
                                material={materials.Aluminium_Black}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.steel_Chrome_Clean_0.geometry}
                                material={materials.Chrome_Clean}
                            />
                            <mesh castShadow receiveShadow geometry={nodes.steel_light_0.geometry} material={materials.light} />
                        </group>
                        <group position={[-20.35, 0, 13.07]} rotation={[0, -1.22, 0]} scale={0.39}>
                            <mesh castShadow receiveShadow geometry={nodes.tree_tree_b_0.geometry} material={materials.tree_b} />
                        </group>
                        <group position={[-12.43, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh castShadow receiveShadow geometry={nodes.walls_walls_0.geometry} material={materials.walls} />
                        </group>
                    </group>
                </group>
            </group>

            {/* Physical Constructs */}
            <PhysicalSpace position={[0,2,0]}/>
        </>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload('/models/Gallery/gallery.gltf')
})


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default GalleryRoom
