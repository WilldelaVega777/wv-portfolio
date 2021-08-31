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
const Brochure = (props) => {

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
                args={[91.5, 39]}
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
export default Brochure


