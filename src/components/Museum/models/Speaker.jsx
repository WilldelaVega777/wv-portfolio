//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import * as THREE                       from 'three'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'
import { useTexture }                   from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Speaker = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/speaker/speaker.glb')

    const texture = useTexture('/models/Museum/speaker/texture.jpg')
    texture.center.set(.5, .5);
    texture.rotation = THREE.MathUtils.degToRad(180);


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
                geometry={nodes.Cube.geometry}
                position={[-0.01, 1.75, -1.24]}
                rotation={[0, 0.21, 0]}
                scale={[1, 1.57, 1]}
            >
                <meshStandardMaterial
                    color='white'
                    map={texture}
                />
            </mesh>

        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/Speaker/speaker.glb'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Speaker
