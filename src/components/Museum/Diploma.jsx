//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react';
import { useTexture }                   from '@react-three/drei'

import WhiteFrame                       from './models/WhiteFrame'
import PhotoFrame                       from "./models/PhotoFrame"

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Diploma = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const diploma = useTexture(props.image)


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            {
                (props.type === 1) && (
                <WhiteFrame
                    position={props.position}
                    rotation={props.rotation}
                    scale={[1,1,1]}
                    externalColor={props.externalColor}
                    internalColor={props.internalColor}
                    content={diploma}
                />)
            }
            {
                (props.type === 2) && (
                    <PhotoFrame
                        position={props.position}
                        rotation={props.rotation}
                        content={diploma}
                    />
                )
            }
        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Diploma
