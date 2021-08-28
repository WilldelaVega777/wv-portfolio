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
import { Sky }                  from "@react-three/drei"
import { PositionalAudio }      from "@react-three/drei"

import PhysicalSpace            from "../PhysicalSpace"
import Lamp                     from "../Lamp"
import WV                       from "../../Museum/models/WV"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const GalleryRoom = forwardRef((props, ref) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group   = useRef()

    const { nodes, materials } =
        useGLTF('/models/Gallery/Gallery.gltf')


    //----------------------------------------------------------
    // Ref Component Extension Section
    //----------------------------------------------------------
    useImperativeHandle(ref, () => ({

    }))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>

            {/* Lights */}
            <ambientLight/>
            <pointLight position={[10, 10, 10]}
                        intensity={0.1}
            />


            {/* Lamps */}
            <Lamp
                position={[-10,140,12]}
                color="brown"
                intensity={50}
                distance={180}
                angle={Math.PI * 0.2}
            />

            <Lamp
                position={[-58.5,140,-75]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-124,140,-75]}
                color="darkmagenta"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-189,140,-75]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-254.5,140,-75]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-58.5,140,-17]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-59,140,42]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-59,140,100]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-124,140,-17]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-124,140,42]}
                color="navy"
                intensity={50}
                distance={148}
            />

           <Lamp
                position={[-124,140,100]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-189,140,-17]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-189,140,42]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-189,140,100]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-254.5,140,-17]}
                color="darkmagenta"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-254.5,140,42]}
                color="navy"
                intensity={50}
                distance={148}
            />

            <Lamp
                position={[-254.5,140,100]}
                color="darkmagenta"
                intensity={50}
                distance={148}
            />


            <group position={[-289, 70, 10]} scale={[3.5,3.5,3.5]}>
                <group rotation={[0,(Math.PI /2),0]}>
                    <WV
                        standard={true}
                        rotation={[(Math.PI /2),0,0]}
                    />
                    <PositionalAudio
                        url="/audio/soundtrack.mp3"
                        distance={1000}
                        volume={.5}
                        loop
                        {...props}
                    />
                </group>
            </group>


            {/* Interior */}
            <group ref={group} {...props} dispose={null}>
                <Sky
                    distance={450} // Camera distance (default=450000)
                    sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
                    inclination={0.4} // Sun elevation angle from 0 to 1 (default=0)
                    azimuth={0.45} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
                    {...props} // All three-stdlib/objects/Sky props are valid
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
})


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload('/models/Gallery/gallery.gltf')


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default GalleryRoom
