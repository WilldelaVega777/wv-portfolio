//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                        from "react"
import  * as THREE                  from "three"
import { usePlane }                 from '@react-three/cannon'
import Wall                         from "./Wall"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PhysicalSpace = (props) => {

    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [ref1] = usePlane(() => (
        {
            args: [470, 230],
            rotation: [-Math.PI / 2, 0, 0],
            position: [-50, 80, 10]
        }
    ))
/*
    const [ref2] = usePlane(() => (
        {
            args: [260, 230, 15],
            rotation: [-Math.PI / 2, 0, 0],
            position: [-160, 320, 10],
            type: 'Static'
        }
    ))
*/
    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (

        <group>

            {/* Floor */}
            <mesh ref={ref1}>
                <planeBufferGeometry
                    attach="geometry"
                    args={[470, 230]}
                />
                <meshPhongMaterial
                    attach="material"
                    color={'darkred'}
                    opacity={0}
                    transparent
                />
            </mesh>
{/*
            <mesh ref={ref2}>
                <planeBufferGeometry
                    attach="geometry"
                    args={[260, 230]}
                    side={THREE.DoubleSide}
                />
                <meshPhongMaterial
                    attach="material"
                    color={'darkred'}
                    opacity={0}
                    transparent
                />
            </mesh>
*/}

            <Wall
                width={470}
                sidePosition={-50}
                depthPosition={133}
                rotation={true}
            />

            <Wall
                width={470}
                sidePosition={-50}
                depthPosition={-110.6}
                rotation={true}
            />

            <Wall
                width={240}
                sidePosition={190}
                depthPosition={10}
                side
            />

            <Wall
                width={240}
                sidePosition={-30}
                depthPosition={10}
                side
            />

            <Wall
                width={240}
                sidePosition={-280}
                depthPosition={10}
                side
            />

        </group>

    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PhysicalSpace
