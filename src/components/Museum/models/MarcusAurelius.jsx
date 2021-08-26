//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const MarcusAurelius = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/marcus_aurelius/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-261.75, -206.63, -760.03]}>
                    <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                    <mesh castShadow receiveShadow geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                    <mesh castShadow receiveShadow geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                    <mesh castShadow receiveShadow geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                    <mesh castShadow receiveShadow geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                    <mesh castShadow receiveShadow geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                </group>
            </group>
        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/marcus_aurelius/scene.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default MarcusAurelius


