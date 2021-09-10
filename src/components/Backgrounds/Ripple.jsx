//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { Suspense }                     from 'react'
import { useMemo }                      from 'react'
import { useCallback }                  from 'react'

import * as THREE                       from 'three'
import { Canvas }                       from '@react-three/fiber'
import { useFrame }                     from '@react-three/fiber'
import { useTexture }                   from '@react-three/drei'
import { OrbitControls }                from '@react-three/drei'

import circleImg from './assets/circle.png'

import "./Ripple.scss"


//--------------------------------------------------------------
// Internal Components Section
//--------------------------------------------------------------
const Points = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const pointTexture = useTexture(circleImg)
    const bufferRef    = useRef()
    const count = (props.amount || 100)
    const sep   = (props.separation || 3)

    let t = 0
    let f = 0.002
    let a = 3

    const graph = useCallback((x, z) => {
        return (Math.sin(f * (x **2 + z **2 + t)) * a)
    }, [t, f, a])

    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++)
        {
            for (let zi = 0; zi < count; zi++)
            {
                let x = (sep * (xi - count / 2))
                let z = (sep * (zi - count / 2))
                let y = graph(x, z)

                positions.push(x,y,z)
            }
        }

        return new Float32Array(positions)
    }, [count, sep, graph])


    //----------------------------------------------------------
    // Animation Section
    //----------------------------------------------------------
    useFrame(() => {

        t += (props.speed || 15)
        a += (props.amplitude || 0)

        const positions = bufferRef.current.array

        let i = 0;
        for (let xi = 0; xi < count; xi++)
        {
            for (let zi = 0; zi < count; zi++)
            {
                let x = (sep * (xi - count / 2))
                let z = (sep * (zi - count / 2))
                positions[i +1] = graph(x, z)
                i += 3
            }
        }
        bufferRef.current.needsUpdate = true
    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group {...props}>
            <points>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        ref={bufferRef}
                        attachObject={[
                            'attributes',
                            'position'
                        ]}
                        array={positions}
                        count={(positions.length / 3)}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    attach="material"
                    map={pointTexture}
                    color={props.color || 0x444444}
                    size={0.5}
                    sizeAttenuation
                    transparent={false}
                    alphaTest={0.5}
                    opacity={1.0}
                />
            </points>
        </group>
    )
}



//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Ripple = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const isBrowser = (typeof window !== "undefined")

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <div className="background">
            {
                isBrowser &&
                <Suspense fallback={<div>Loading...</div>}>
                    <Canvas
                        colorManagement={false}
                        camera={{position: [100, 10, 0], fov: 75}}
                    >

                        <Points {...props}/>

                        {
                            props.orbit &&
                            <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={true}
                                autoRotate={true}
                                maxPolarAngle={((Math.PI / 2) * 0.85)}
                                minPolarAngle={((Math.PI / 2) * 0.50)}
                            />
                        }

                    </Canvas>
                </Suspense>
            }
        </div>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Ripple
