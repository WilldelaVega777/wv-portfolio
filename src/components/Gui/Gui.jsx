//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import './Gui.scss'
import { useState }             from "react"

import DatGui                   from 'react-dat-gui';
import { DatBoolean }           from 'react-dat-gui';
import { DatColor }             from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatString }            from 'react-dat-gui';


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Gui = () => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const [dat, setDat] = useState({
        package: 'react-dat-gui',
        power: 9000,
        isAwesome: true,
        feelsLike: '#2FA1D6'
    })


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const handleUpdate = (newData) => {
        setDat({
            ...dat,
            newData
        })
    }

    return (

        <DatGui data={dat}
                onUpdate={handleUpdate}
                style={{zIndex:9999, top: 60 + 'px'}}
        >
            <DatString path='package' label='Package'/>
            <DatNumber path='power' label='Power' min={9000} max={9999} step={1}/>
            <DatBoolean path='isAwesome' label='Awesome?'/>
            <DatColor path='feelsLike' label='Feels Like'/>
        </DatGui>

    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Gui
