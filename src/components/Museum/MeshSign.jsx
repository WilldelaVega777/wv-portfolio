//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import { useRef }               from 'react'
import { useEffect }            from 'react'
import * as THREE               from 'three'
import { useGLTF }              from '@react-three/drei'
import { useTexture }           from '@react-three/drei'
import { useNormalTexture }     from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const MeshSign = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF(`/models/Museum/signs/${props.file}.glb`)


    //----------------------------------------------------------
    const base      = useTexture(
        '/models/Museum/textures/metal01/Metal01BaseColor.jpg'
    )
    const ao        = useTexture(
        '/models/Museum/textures/metal01/Metal01AO.jpg'
    )
    const height    = useTexture(
        '/models/Museum/textures/metal01/Metal01Height.png'
    )
    const metallic  = useTexture(
        '/models/Museum/textures/metal01/Metal01Metallic.jpg'
    )
    const [normalMap, url] = useNormalTexture(
        51,
        {
          offset: [0, 0],
          repeat: [8, 8],
          anisotropy: 16
        }
    )
    const roughness = useTexture(
        '/models/Museum/textures/metal01/Metal01Roughness.jpg'
    )


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            position={props.position}
            scale={[27,27,27]}
            {...props}
        >

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                position={[-1.37, 0.16, 0]}
                rotation={[1.56, 0, 0]}
            >
                <meshStandardMaterial
                    attach='material'
                    map={base}
                    aoMap={ao}
                    metalnessMap={metallic}
                    normalMap={normalMap}
                    roughnessMap={roughness}
                    metalness={0.3}
                    roughness={0.95}
                    reflectivity={0.7}
                    specular={0x888888}
                    depthText={false}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                    color={props.color || 'goldenrod'}
                />
            </mesh>
        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default MeshSign
