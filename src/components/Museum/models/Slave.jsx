//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Slave = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/slave/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={[3,3,3]}
            rotation={[0, (-Math.PI /4.5), 0]}
        >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <group
                    rotation={[Math.PI / 2, 0, 0]}
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
                </group>
            </group>
      </group>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload(
        '/models/Museum/slave/scene.gltf'
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Slave
