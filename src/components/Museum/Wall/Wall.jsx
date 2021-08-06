//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useFrame }             from '@react-three/fiber'
import { useBox }               from '@react-three/cannon'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Wall = (props) => {

    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref, api] = useBox(() => (
        {
            mass: 10,
            linearFactor: [1,1,0],
            type: 'Dynamic',
            args: props.args,
            position: props.position,
            ...props
        }
    ))

    useFrame((state, delta) => {
        api.position.set(
            ref.current.position.x,
            ref.current.position.y,
            ref.current.position.z
        )
    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh ref={ref}>
            <boxBufferGeometry
                args={props.args}
                attach="geometry"
            />
            <meshPhongMaterial color={'darkred'}/>
        </mesh>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Wall
