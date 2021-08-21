//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Techichi = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/techichi/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={[25,25,25]}
        >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <group
                    rotation={[-0.21, -0.15, 0.47]}
                >
                    <group
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial.geometry}
                            material={nodes.defaultMaterial.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={nodes.defaultMaterial_1.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_2.geometry}
                            material={nodes.defaultMaterial_2.material}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/techichi/scene.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Techichi
