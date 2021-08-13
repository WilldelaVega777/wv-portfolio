//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Chair = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/chair/Black_leather_chair.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={[120,120,120]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.koltuk.geometry}
                material={materials.chair}
                rotation={[0, -0.5, 0]}
            />
        </group>
    )

}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/chair/Black_leather_chair.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Chair

















