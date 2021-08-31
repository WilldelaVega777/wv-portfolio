//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import * as THREE                       from 'three'
import { useTexture }                   from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Certification = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const [map] =
        useTexture(['/models/Gallery/textures/Brochure.png'])


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


