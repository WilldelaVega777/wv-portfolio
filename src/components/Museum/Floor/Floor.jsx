//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                        from "react"
import * as THREE                   from "three"
import { usePlane }                 from '@react-three/cannon'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Floor = (props) => {

    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref] = usePlane(() => (
        {
            ...props,
            args: [1400, 1800],
            rotation: [-Math.PI / 2, 0, 0],
            position: [0, -0.3, 0],
            type: "Static"
        }
    ))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh ref={ref}>
            <planeBufferGeometry
                attach="geometry"
                args={[1400, 1800]}
            />
            <meshPhongMaterial
                attach="material"
                color={'darkred'}
                opacity={0.5}
                transparent
            />
        </mesh>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Floor
