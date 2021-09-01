//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import * as THREE                       from 'three'
import { useTexture }                   from '@react-three/drei'

import brochure from './textures/Brochure.png'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Certification = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const [map] =
        useTexture([brochure])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh
            {...props}
        >
            <planeBufferGeometry
                args={[29, 39.5]}
                attach="geometry"
                />
            <meshStandardMaterial
                color="white"
                map={map}
                attach="material"
            />
        </mesh>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Certification


