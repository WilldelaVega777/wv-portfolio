//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import * as THREE                       from 'three'

import { useFrame }                     from '@react-three/fiber'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const WV = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const wv   = useRef()
    const blue = useRef()
    const red  = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/WV/WV.glb')


    //----------------------------------------------------------
    // Animation Section
    //----------------------------------------------------------
    useFrame(({clock}) => {
        if (props.progress)
        {
            const eT = clock.getElapsedTime()
            wv.current.rotation.set(0,eT,0)
        }

        if (props.progress < 25)
        {
            red.current.material.transparent = true
            red.current.material.opacity = 0
            blue.current.material = new THREE.MeshNormalMaterial()
        }
        else if ((props.progress > 25) && (props.progress < 50))
        {
            blue.current.material = new THREE.MeshNormalMaterial()
            red.current.material = new THREE.MeshNormalMaterial()
        }
        else if ((props.progress > 50) && (props.progress < 75))
        {
            blue.current.material = materials.SVGMat
            red.current.material = new THREE.MeshNormalMaterial()
        }
        if (props.progress > 75)
        {
            blue.current.material = materials.SVGMat
            red.current.material  = new THREE.MeshStandardMaterial({
                color: '#440000',
                metalness: .7,
                roughness: .2
            })
        }
    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={wv}
            dispose={null}
            {...props}
        >
            <group
                rotation={[(Math.PI /2), 0, 0]}
                scale={props.scale || [100, 100, 100]}
            >
            <mesh
                ref={blue}
                castShadow
                receiveShadow
                geometry={nodes.Curve007.geometry}
                side={THREE.DoubleSide}
                material={materials.SVGMat}
            />
            <mesh ref={red}
                castShadow
                receiveShadow
                geometry={nodes.Curve007_1.geometry}
                material={new THREE.MeshStandardMaterial({
                    color: '#440000',
                    metalness: .7,
                    roughness: .2
                })}
            />
            </group>
      </group>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload(
        '/models/Museum/WV/WV.glb'
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default WV
