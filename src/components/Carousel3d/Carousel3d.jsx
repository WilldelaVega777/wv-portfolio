//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { Suspense }         from "react"
import { useState }         from "react"
import "./Carousel3d.scss"

import { Canvas }           from "@react-three/fiber"
import { OrbitControls }    from "@react-three/drei"

import Item                 from "./Item/Item"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Carousel3d = (props) => {

    //----------------------------------------------------------
    // Component Variables Section
    //----------------------------------------------------------
    let components = []
    const [activeComponent, setActiveComponent] = useState(-1)


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const activateItem = (id) => {
        setActiveComponent(id)
    }
    //----------------------------------------------------------
    const item_IsActive = () => {
        return activeComponent
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Canvas>
            <Suspense fallback={<ambientLight/>}>
                <ambientLight />
                <pointLight position={[10, 10, 10]}
                            intensity={0.1}
                />
                {
                    props.items.map((item, index) => {
                        const angle = (((index + 1) / props.items.length) * (Math.PI * 2))
                        const newItem = (
                            <Item
                                key={index}
                                total={props.items.length}
                                angle={angle}
                                activateItem={(id) => activateItem(id)}
                                item_IsActive={() => item_IsActive()}
                                item={item}
                            />
                        )
                        components.push(newItem)
                        return newItem
                    })
                }
                <OrbitControls enablePan={false}
                            enableZoom={false}
                            enableRotate={true}
                />
            </Suspense>
        </Canvas>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Carousel3d
