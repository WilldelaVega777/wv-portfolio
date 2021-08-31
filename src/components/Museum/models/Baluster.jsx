//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Baluster = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/baluster/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={props.scale || [250,250,250]}
        >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_0.geometry}
                    material={nodes.mesh_0.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_1.geometry}
                    material={nodes.mesh_1.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_2.geometry}
                    material={nodes.mesh_2.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_3.geometry}
                    material={nodes.mesh_3.material}
                />
            </group>
      </group>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload(
        '/models/Museum/baluster/scene.gltf'
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Baluster
