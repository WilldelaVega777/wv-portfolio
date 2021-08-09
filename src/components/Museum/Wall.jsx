//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useBox }               from '@react-three/cannon'

// props
// Width
// SidePosition
// DepthPosition


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Wall = (props) => {

    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref] = useBox(() => (
        {
            args    : [props.width, 240, 15],
            position: [props.sidePosition, 120, props.depthPosition],
            rotation: props.side ? [0,(Math.PI / 2),0] : [0,0,0],
            type    : 'Static'
        }
    ))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh ref={ref}>
            <boxBufferGeometry
                args={[props.width, 240, 15]}
                position={[props.sidePosition, 120, props.depthPosition]}
                rotation={props.side ? [0,(Math.PI / 2),0] : [0,0,0]}
                attach="geometry"
            />
            <meshPhongMaterial
                color={'darkred'}
                opacity={0}
                transparent
            />
        </mesh>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Wall
