//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import * as THREE                       from 'three'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'
import { SpotLightHelper }              from "three"
import { useHelper }                    from '@react-three/drei'
import { useFrame }                     from '@react-three/fiber';


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Reflector = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group             = useRef()
    const refLight          = useRef()
    const lightTargetRef    = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/reflector/Reflector.gltf')



    //useHelper(refLight, SpotLightHelper, 'cyan')



    //----------------------------------------------------------
    // Component Update Section
    //----------------------------------------------------------
    useFrame(()=>{})


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            rotation={[0,(-Math.PI / props.targetRotationH),0]}
            position={props.position}
        >
            <group
                position={[0, 0.37, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            >
                <group
                    position={[-0.03, 0, 22.28]}
                    rotation={[0, -Math.PI / props.targetRotationV, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Body.geometry}
                        material={materials.body}
                        position={[0.04, 0, -5.76]}
                    />
                    <mesh
                        ref={lightTargetRef}
                        position={[0,0,30]}
                    >
                        <boxBufferGeometry args={[3.5,3.5,3.5]}/>
                        <meshStandardMaterial
                            color='green'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                    <spotLight
                        ref={refLight}
                        position={[0,0,10]}
                        color={props.color}
                        intensity={props.intensity}
                        distance={props.distance}
                        angle={Math.PI * 0.1}
                        penumbra={1}
                        decay={1}
                        target={lightTargetRef.current}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cable_gland_2.geometry}
                        material={nodes.Cable_gland_2.material}
                        position={[-6.18, 0, -5.3]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Difuser.geometry}
                        material={nodes.Difuser.material}
                        position={[0.04, 0, 8.14]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.difuser_spacers.geometry}
                        material={nodes.difuser_spacers.material}
                        position={[0.04, 0, 8.91]}
                    />
                </group>
                <group position={[-0.01, 0, 18.64]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cable_gland.geometry}
                        material={nodes.Cable_gland.material}
                        position={[0.02, 0.01, -11.93]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Screw1.geometry}
                        material={nodes.Screw1.material}
                        position={[-0.02, 6.74, 3.63]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.screw2.geometry}
                        material={nodes.screw2.material}
                        position={[-0.02, -6.75, 3.63]}
                        rotation={[Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wooden_frame_.geometry}
                        material={materials['wooden frame']}
                        position={[0.02, 0.01, 4.66]}
                    />
                </group>
                <group position={[0.01, 0, 23.31]}>
                    {/*
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_0.geometry}
                        material={nodes.Lower_cable_0.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_10.geometry}
                        material={nodes.Lower_cable_10.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_20.geometry}
                        material={nodes.Lower_cable_20.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_40.geometry}
                        material={nodes.Lower_cable_40.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_50.geometry}
                        material={nodes.Lower_cable_50.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_60.geometry}
                        material={nodes.Lower_cable_60.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_70.geometry}
                        material={nodes.Lower_cable_70.material}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_90.geometry}
                        material={nodes.Lower_cable_90.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_80.geometry}
                        material={nodes.Lower_cable_80.material}
                    />
                */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lower_cable_30.geometry}
                        material={nodes.Lower_cable_30.material}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ceiling_conector.geometry}
                    material={materials['ceiling plastic']}
                    position={[0.01, 0, -20.19]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Upper_cable.geometry}
                    material={nodes.Upper_cable.material}
                    position={[0.01, 0, -6.22]}
                />
            </group>
        </group>
    )

}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/reflector/Reflector.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflector
