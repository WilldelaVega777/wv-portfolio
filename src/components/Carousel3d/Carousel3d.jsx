//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { Suspense }         from "react"
import { useState }         from "react"
import { useTexture }       from '@react-three/drei'

import { Canvas }           from "@react-three/fiber"
import { Text }             from "@react-three/drei"
import { Reflector }        from "@react-three/drei"
import { OrbitControls }    from "@react-three/drei"

import Item                 from "./Item/Item"

import "./Carousel3d.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Carousel3d = (props) => {

    //----------------------------------------------------------
    // Component Variables Section
    //----------------------------------------------------------
    const yBase = -0.70
    let components = []
    const [activeComponent, setActiveComponent] = useState(-1)

    // Textures
    const [
        depthMap
    ] = useTexture([`/images/Portfolio/depth.png`])


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
        <Suspense fallback={
            <Canvas>
                <Text color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    Loading
                </Text>
            </Canvas>
        }>
            <Canvas>
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
                                floor={yBase}
                                activateItem={(id) => activateItem(id)}
                                item_IsActive={() => item_IsActive()}
                                item={item}
                            />
                        )
                        components.push(newItem)
                        return newItem
                    })
                }
                <Reflector
                    args={[10,10]}
                    resolution={2048}
                    mirror={1.0}
                    mixBlur={0.4}
                    mixStrength={0.4}
                    minDepthThreshold={0.5}
                    maxDepthThreshold={0.9}
                    depthScale={0.5}
                    depthToBlurRatioBias={0.1}
                    position={[0,yBase,0]}
                    rotation={[(Math.PI * -0.50), 0, 0]}
                    depthMap={depthMap}
                >
                    {
                        (Material, props) => (
                            <Material {...props}/>
                        )
                    }
                </Reflector>
                <OrbitControls enablePan={false}
                               enableZoom={false}
                               enableRotate={true}
                               autoRotate={true}
                               maxPolarAngle={((Math.PI / 2) * 0.85)}
                               minPolarAngle={((Math.PI / 2) * 0.50)}
                />
            </Canvas>
        </Suspense>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Carousel3d
