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
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />
            <Reflector
                position={[435,270,660]}
                scale={[100,100,100]}
                targetRotationH={0.225}
                targetRotationV={2.7}
                distance={640}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />
            <Reflector
                position={[435,270,170]}
                scale={[100,100,100]}
                targetRotationH={0.280}
                targetRotationV={2.57}
                distance={640}
                intensity={15}
                color='green'
                speed={props.motionSpeed}
            />
            <Reflector
                position={[435,270,980]}
                scale={[100,100,100]}
                targetRotationH={0.220}
                targetRotationV={3.8}
                distance={400}
                intensity={60}
                color='green'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[180,270,-460]}
                scale={[100,100,100]}
                targetRotationH={0.215}
                targetRotationV={3.0}
                distance={780}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[435,270,-460]}
                scale={[100,100,100]}
                targetRotationH={0.230}
                targetRotationV={3.0}
                distance={780}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[-650,270,-460]}
                scale={[100,100,100]}
                targetRotationH={-0.138}
                targetRotationV={2.4}
                distance={980}
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[-400,270,-460]}
                scale={[100,100,100]}
                targetRotationH={-0.132}
                targetRotationV={2.4}
                distance={980}
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[0,270,980]}
                scale={[100,100,100]}
                targetRotationH={-0.538}
                targetRotationV={2.35}
                distance={980}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[80,270,980]}
                scale={[100,100,100]}
                targetRotationH={0.38}
                targetRotationV={2.9}
                distance={980}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[-80,270,700]}
                scale={[100,100,100]}
                targetRotationH={0.42}
                targetRotationV={3.12}
                distance={980}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[180,270,700]}
                scale={[100,100,100]}
                targetRotationH={0.38}
                targetRotationV={3.12}
                distance={980}
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />


            <Reflector
                position={[-80,270,100]}
                scale={[100,100,100]}
                targetRotationH={0.42}
                targetRotationV={2.9}
                distance={980}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[180,270,100]}
                scale={[100,100,100]}
                targetRotationH={0.38}
                targetRotationV={2.9}
                distance={980}
                intensity={props.intensityMagenta || 15}
                color='darkmagenta'
                speed={props.motionSpeed}
            />


            <Reflector
                position={[-80,270,-300]}
                scale={[100,100,100]}
                targetRotationH={-Math.PI}
                targetRotationV={2.9}
                distance={980}
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />

            <Reflector
                position={[180,270,-300]}
                scale={[100,100,100]}
                targetRotationH={0.38}
                targetRotationV={2.9}
                distance={980}
                intensity={props.intensityNavy || 15}
                color='navy'
                speed={props.motionSpeed}
            />
        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflectors
