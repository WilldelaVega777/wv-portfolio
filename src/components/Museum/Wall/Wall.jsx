//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { useEffect }            from "react"
import { useRef }               from "react"
import * as THREE               from 'three'
import { useBox }               from '@react-three/cannon'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Wall = (props) => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const posX = 0
    const posY = 5
    const posZ = 0
    const sizeX = 10
    const sizeY = 10
    const sizeZ = 10


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {
        void api.position.set(props.posX, props.posY, props.posZ)
    }, [props.posX, props.posY, props.posZ])



    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------


    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref, api] = useBox(() => (
        {
            ...props,
            mass: 0,
            position: [
                (props.posX || posX),
                (props.poxY || posY),
                (props.posZ || posZ)
            ]
        }
    ))

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={[
                (props.sizeX || sizeX),
                (props.sizeY || sizeY),
                (props.sizeZ || sizeZ)
            ]}/>
            <meshPhongMaterial color={'darkred'}/>
        </mesh>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Wall
