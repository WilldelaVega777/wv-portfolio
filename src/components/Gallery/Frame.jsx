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
const Frame = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const [map] = useTexture([props.content])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh
            {...props}
        >
            <planeBufferGeometry
                args={[29.5, 39]}
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
export default Frame


