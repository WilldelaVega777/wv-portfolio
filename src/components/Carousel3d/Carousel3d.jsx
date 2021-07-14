//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import "./Carousel3d.scss"

import { Canvas }           from "@react-three/fiber"
import { AxesHelper }       from "@react-three/fiber"
import { OrbitControls }    from "@react-three/drei"

import { useFrame }         from "@react-three/fiber"
import { useRef }           from "react"
import { useEffect }        from "react"

import Item                 from "./Item/Item"

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
                    const radius = 3.0
                    const angle = (((index + 1) / props.items.length) * (Math.PI * 2))
                    return (
                        <Item position={
                                [
                                    Math.cos(angle) * radius,
                                    0,
                                    Math.sin(angle) * radius
                                ]
                            }
                            rotation={
                                [
                                    0,
                                    (angle * -1) + (Math.PI / 2),
                                    0
                                ]
                            }
                        >
                            <AxesHelper size={1}/>
                        </Item>
                    )
                })
            }
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true}/>
        </Canvas>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Carousel3d
