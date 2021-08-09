//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                        from "react"
import { usePlane }                 from '@react-three/cannon'
import Wall                         from "./Wall"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PhysicalSpace = (props) => {

    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref] = usePlane(() => (
        {
            ...props,
            args: [1400, 1800],
            rotation: [-Math.PI / 2, 0, 0],
            position: [0, 150, 0],
        }
    ))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group>
            <mesh ref={ref}>
                <planeBufferGeometry
                    attach="geometry"
                    args={[1400, 1800]}
                />
                <meshPhongMaterial
                    attach="material"
                    color={'darkred'}
                    opacity={0}
                    transparent
                />
            </mesh>

            {/* Separator Walls */}
            <Wall
                width={300}
                sidePosition={355}
                depthPosition={-430}
            />
            <Wall
                width={300}
                sidePosition={355}
                depthPosition={123}
            />
            <Wall
                width={300}
                sidePosition={355}
                depthPosition={675}
            />


            <Wall
                width={266}
                sidePosition={-290}
                depthPosition={715}
            />

            <Wall
                width={545}
                sidePosition={-425}
                depthPosition={427}
            />


            <Wall
                width={545}
                sidePosition={-425}
                depthPosition={-390}
            />


            {/* Perimetral Walls */}
            <Wall
                width={1200}
                sidePosition={-105}
                depthPosition={-1045}
            />

            <Wall
                width={1200}
                sidePosition={-105}
                depthPosition={1020}
            />

            <Wall
                width={2060}
                sidePosition={-710}
                depthPosition={-5}
                side={true}
            />

            <Wall
                width={2060}
                sidePosition={515}
                depthPosition={-5}
                side={true}
            />

        </group>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PhysicalSpace
