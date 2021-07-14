//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import "./Carousel3d.scss"

import { Canvas, useFrame }           from "@react-three/fiber"
import { AxesHelper }       from "@react-three/fiber"
import { OrbitControls }    from "@react-three/drei"

import Item                 from "./Item/Item"

import { useRef }           from "react"
import { useEffect }        from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Carousel3d = (props) => {

    //----------------------------------------------------------
    // Lifecycle Methods Section
    //----------------------------------------------------------
    const center = useRef()

    //----------------------------------------------------------
    // Lifecycle Methods Section
    //----------------------------------------------------------
    useEffect(() => {

        console.log(props)

    }, [])

    //----------------------------------------------------------
    // useFrame((state, delta) => {

    // })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {
                props.items.map((item, index) => {
                    const radius = 2
                    const angle = (((index + 1) / props.items.length) * (Math.PI * 2))
                    return (
                        <Item position={
                                [
                                    Math.cos(angle) * radius,
                                    Math.sin(angle) * radius,
                                    0
                                ]
                            }
                            rotation={
                                [
                                    0,
                                    0,
                                    (angle + (Math.PI / 2))
                                ]
                            }
                        >
                            <AxesHelper size={1}/>
                        </Item>
                    )
                })
            }
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        </Canvas>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Carousel3d
