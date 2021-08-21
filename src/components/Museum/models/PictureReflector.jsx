//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import * as THREE                       from 'three'
import { useRef }                       from 'react'
import { PointLightHelper }             from "three"
import { useFrame }                     from '@react-three/fiber';
import { useGLTF }                      from '@react-three/drei'
import { useTexture }                   from '@react-three/drei'
import { useHelper }                    from '@react-three/drei'
import { Cylinder }                     from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PictureReflector = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group             = useRef()
    const refLight          = useRef()

    const { nodes } =
        useGLTF('/models/Museum/picture_reflector/picture_reflector.gltf')

    const texture = useTexture(
        '/models/Museum/picture_reflector/Steel.jpg'
    )

    const normal = useTexture(
        '/models/Museum/textures/ScratchedGoldNormal.png'
    )

    useHelper(refLight, PointLightHelper, 0.5, 'green')



    //----------------------------------------------------------
    // Component Update Section
    //----------------------------------------------------------
    useFrame(()=>{})


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
                geometry={nodes.PL01.geometry}
                position={[0, 0.11, -0.09]}
                scale={[0.080,0.080,0.080]}
            >
                <meshPhysicalMaterial
                    map={texture}
                    clearcoat={1.0}
					clearcoatRoughness={0.1}
					metalness={0.9}
					roughness={0.5}
					normalMap={normal}
					normalScale={new THREE.Vector2( 0.15, 0.15 )}
                />
            </mesh>
            <Cylinder
                args={[.7,.7,30]}
                position={[0,-10,13]}
                rotation={[0,0,(Math.PI /2)]}
            >
                <meshStandardMaterial
                    color='#f5f5dc'
                    emissive='yellow'
                    emissiveIntensity={5000}

                />
            </Cylinder>

        </group>
    )

}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/picture_reflector/picture_reflector.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PictureReflector
