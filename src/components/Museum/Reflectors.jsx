//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react';
import Reflector                        from "./models/Reflector"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Reflectors = (props) => {

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
                color='navy'
            />
            <Reflector
                position={[435,270,660]}
                scale={[100,100,100]}
                targetRotationH={0.225}
                targetRotationV={2.7}
                distance={640}
                intensity={10}
                color='darkmagenta'
            />
            <Reflector
                position={[435,270,170]}
                scale={[100,100,100]}
                targetRotationH={0.280}
                targetRotationV={2.57}
                distance={640}
                intensity={15}
                color='green'
            />
            <Reflector
                position={[435,270,980]}
                scale={[100,100,100]}
                targetRotationH={0.220}
                targetRotationV={3.8}
                distance={400}
                intensity={60}
                color='green'
            />
            <Reflector
                position={[435,270,-460]}
                scale={[100,100,100]}
                targetRotationH={0.230}
                targetRotationV={3.0}
                distance={780}
                intensity={15}
                color='darkmagenta'
            />
            <Reflector
                position={[-650,270,-460]}
                scale={[100,100,100]}
                targetRotationH={-0.138}
                targetRotationV={2.9}
                distance={980}
                intensity={15}
                color='navy'
            />
        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflectors
