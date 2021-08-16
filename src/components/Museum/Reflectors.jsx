//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react';
import Reflector                        from "./models/Reflector"
import { useRef }                       from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Reflectors = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const refLight = useRef()


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            <Reflector
                position={[435,270,100]}
                scale={[100,100,100]}
                targetRotationH={0.225}
                targetRotationV={2.4}
                distance={600}
                intensity={10}
                color='white'
            />
            <Reflector
                position={[435,270,660]}
                scale={[100,100,100]}
                targetRotationH={0.225}
                targetRotationV={2.7}
                distance={640}
                intensity={10}
                color='white'
            />
            <Reflector
                position={[435,270,980]}
                scale={[100,100,100]}
                targetRotationH={0.230}
                targetRotationV={3.0}
                distance={480}
                intensity={15}
                color='white'
            />
        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflectors
