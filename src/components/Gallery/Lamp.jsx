//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
//import { SpotLightHelper }              from "three"
//import { useHelper }                    from '@react-three/drei'
import { useFrame }                     from '@react-three/fiber'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Reflector = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group             = useRef()
    const refLight          = useRef()
    const lightTargetRef    = useRef()

    //useHelper(refLight, SpotLightHelper, 'cyan')

    //----------------------------------------------------------
    // Animation Section
    //----------------------------------------------------------
    useFrame(({clock, delta}) => {

        const radius = props.radius? props.radius : 2
        const eT = clock.getElapsedTime()
        const speed = radius

        lightTargetRef.current.position.set(
            (Math.cos(eT) * speed),
            -20,
            (Math.sin(eT) * speed)
        )

    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            position={props.position}
        >
            <group>
                <spotLight
                    ref={refLight}
                    color={props.color}
                    intensity={props.intensity}
                    distance={props.distance}
                    angle={props.angle || Math.PI * 0.1}
                    penumbra={1}
                    decay={1}
                    target={lightTargetRef.current}
                    scale={[50,50,50]}
                />
                <mesh
                    ref={lightTargetRef}
                    position={[0,-30,0]}
                >
                    <boxBufferGeometry args={[0.1,0.1,0.1]}/>
                    <meshStandardMaterial
                        color='green'
                        opacity={0.5}
                        transparent
                    />
                </mesh>
            </group>
        </group>
    )

}



//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Reflector
