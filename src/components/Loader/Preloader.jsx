//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useState }                     from 'react'

import { Html }                         from '@react-three/drei'
import { Preload }                      from '@react-three/drei'
import { useProgress }                  from '@react-three/drei'
import { Stage }                        from '@react-three/drei'
import { Center }                       from '@react-three/drei'

import WV                               from '../Museum/models/WV'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Preloader = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const {
        active,
        progress,
        errors,
        item,
        loaded,
        total
    } = useProgress()

    const [previousLoaded, setPreviousLoaded] = useState(0)

    if (progress > 98)
    {
        props.onFinishLoading()
    }

    if (progress > previousLoaded)
    {
        setPreviousLoaded(progress)
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            <Stage adjustCamera={false}>
                <Center>
                    <WV
                        position={[0,24,0]}
                        scale={[3,3,3]}
                        progress={previousLoaded.toFixed(0)}
                    />
                </Center>
            </Stage>
            <Html center>
                <div className="preloader">
                    {previousLoaded.toFixed(0)}%
                    Loading...
                </div>
            </Html>
            <Preload all/>
        </>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Preloader
