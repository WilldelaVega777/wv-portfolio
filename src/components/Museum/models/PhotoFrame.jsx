//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useRef }           from 'react'
import { useTexture }       from '@react-three/drei'
import { useNormalTexture } from '@react-three/drei'
import { useGLTF }          from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
export default function WhiteFrame(props)
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/frames/photo_frame.gltf')


    const base      = useTexture('/models/Museum/textures/metal01/Metal01BaseColor.jpg')
    const ao        = useTexture('/models/Museum/textures/metal01/Metal01AO.jpg')
    const height    = useTexture('/models/Museum/textures/metal01/Metal01Height.png')
    const metallic  = useTexture('/models/Museum/textures/metal01/Metal01Metallic.jpg')
    const [normalMap, url] = useNormalTexture(
        51,
        {
          offset: [0, 0],
          repeat: [8, 8],
          anisotropy: 16
        }
    )
    const roughness = useTexture('/models/Museum/textures/metal01/Metal01Roughness.jpg')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={group} {...props} dispose={null} scale={[1.9,1.9,1.8]}>
            <mesh
                geometry={nodes.picture_frame_2.geometry}
                material-color={props.externalColor}
                position={[-12.5, 0, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.8,2.0,1.8]}
            >
                <meshStandardMaterial
                    map={base}
                    aoMap={ao}
                    metalnessMap={metallic}
                    normalMap={normalMap}
                    roughnessMap={roughness}
                    metalness={0.6}
                    roughness={0.75}
                    reflectivity={0.7}
                    specular={0x888888}
                />
            </mesh>
            <mesh position={[12.45,0,2]}>
                <planeBufferGeometry
                    args={[42.6,29]}
                    attach="geometry"
                />
                <meshStandardMaterial
                    map={props.content}
                    attach="material"
                />
            </mesh>
        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload('/models/Museum/frames/photo_frame.gltf')
