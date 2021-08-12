//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'
import { PointLightHelper }             from "three"
import { useHelper }                    from '@react-three/drei'
import { useFrame }                     from '@react-three/fiber';


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Reflector = (props) => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group     = useRef()
    const refLight  = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/reflector/reflector.gltf')

    useHelper(refLight, PointLightHelper, 0.5, 'cyan')



    //----------------------------------------------------------
    // Component Update Section
    //----------------------------------------------------------
    useFrame(() => {
        refLight.current.setPositionZ = 0
    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group>
            <group ref={group} {...props} dispose={null}>
                <group position={[0.01, -23.31, 0]}>
                    <mesh geometry={nodes.Lower_cable_0.geometry} material={nodes.Lower_cable_0.material} />
                    <mesh geometry={nodes.Lower_cable_10.geometry} material={nodes.Lower_cable_10.material} />
                    <mesh geometry={nodes.Lower_cable_20.geometry} material={nodes.Lower_cable_20.material} />
                    <mesh geometry={nodes.Lower_cable_30.geometry} material={nodes.Lower_cable_30.material} />
                    <mesh geometry={nodes.Lower_cable_40.geometry} material={nodes.Lower_cable_40.material} />
                    <mesh geometry={nodes.Lower_cable_50.geometry} material={nodes.Lower_cable_50.material} />
                    <mesh geometry={nodes.Lower_cable_60.geometry} material={nodes.Lower_cable_60.material} />
                    <mesh geometry={nodes.Lower_cable_70.geometry} material={nodes.Lower_cable_70.material} />
                    <mesh geometry={nodes.Lower_cable_80.geometry} material={nodes.Lower_cable_80.material} />
                    <mesh geometry={nodes.Lower_cable_90.geometry} material={nodes.Lower_cable_90.material} />
                </group>
                <group position={[-0.01, -18.64, 0]}>
                    <mesh
                        geometry={nodes.wooden_frame_.geometry}
                        material={materials['wooden frame']}
                        position={[0.02, -4.66, -0.01]}
                    />
                    <mesh
                        geometry={nodes.Cable_gland.geometry}
                        material={nodes.Cable_gland.material}
                        position={[0.02, 11.93, -0.01]}
                    />
                    <mesh
                        geometry={nodes.screw2.geometry}
                        material={nodes.screw2.material}
                        position={[-0.02, -3.63, 6.75]}
                        rotation={[Math.PI, 0, 0]}
                    />
                    <mesh geometry={nodes.Screw1.geometry} material={nodes.Screw1.material} position={[-0.02, -3.63, -6.74]} />
                </group>
                <group position={[-0.03, -22.28, 0]} rotation={[0, 0, -Math.PI / 6]}>
                    <mesh
                        geometry={nodes.difuser_spacers.geometry}
                        material={nodes.difuser_spacers.material}
                        position={[0.04, -8.91, 0]}
                    />
                    <mesh geometry={nodes.Difuser.geometry} material={nodes.Difuser.material} position={[0.04, -8.14, 0]} />
                    <mesh geometry={nodes.Body.geometry} material={materials.body} position={[0.04, 5.76, 0]} />
                    <mesh
                        geometry={nodes.Cable_gland_1.geometry}
                        material={nodes.Cable_gland_1.material}
                        position={[-6.18, 5.3, 0]}
                    />
                </group>
                <mesh
                    geometry={nodes.Ceiling_conector.geometry}
                    material={materials['ceiling plastic']}
                    position={[0.01, 35.47, 0]}
                />
                <mesh geometry={nodes.Upper_cable.geometry} material={nodes.Upper_cable.material} position={[0.01, 13.8, 0]} />
            </group>
            <pointLight
                ref={refLight}
                position={[
                    0,
                    200,
                    -40
                ]}
            />
        </group>

    )

}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload('/models/Museum/reflector/reflector.gltf')


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflector
