//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const WV = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/WV/WV.glb')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve.geometry}
                position={[-10.34, 0.54, 0]}
                scale={100}
            >
                <meshStandardMaterial
                    color='#333366'
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve001.geometry}
                position={[-10.34, 0.54, 0]}
                scale={100}
            >
                <meshStandardMaterial
                    color='#333366'
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve002.geometry}
                position={[-10.34, 0.54, 0]}
                scale={100}
            >
                <meshStandardMaterial
                    color='#be1e2d'
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003.geometry}
                position={[-10.34, 0.54, 0]}
                scale={100}
            >
                <meshStandardMaterial
                    color='#333366'
                />
            </mesh>
        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/WV/WV.glb'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default WV
