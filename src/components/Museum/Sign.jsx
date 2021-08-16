//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import * as THREE               from 'three'
import { useTexture }           from '@react-three/drei'
import { useNormalTexture }     from '@react-three/drei'

import roboto from '../../assets/fonts/Roboto/Roboto.json'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
function Sign(props)
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const font = new THREE.FontLoader().parse(roboto)

    const textOptions = {
        font,
        size: props.fsize,
        height: 0
    };

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
            position={props.position}
            rotation={props.rotation}
        >
            <group>
                <mesh>
                    <textGeometry
                        attach='geometry'
                        args={[props.text, textOptions]}
                    />
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
        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Sign

