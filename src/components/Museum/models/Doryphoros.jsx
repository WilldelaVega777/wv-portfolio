//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Doryphoros = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/doryphoros/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={[.11,.11,.11]}
        >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <group
                    position={[-356.11, -442.95, -0.48]}
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
                </group>
            </group>
      </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/doryphoros/scene.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Doryphoros


