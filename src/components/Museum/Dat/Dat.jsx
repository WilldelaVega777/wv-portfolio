//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { useEffect }            from "react"
import DatGui                   from 'react-dat-gui';
import { DatFolder }            from 'react-dat-gui';
import { DatNumber }            from 'react-dat-gui';
import { DatButton }            from 'react-dat-gui';
import "./Dat.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Dat = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const defaultDat = {
        magentaLight : 15.0,
        blueLight    : 15.0,
        motionSpeed  : 3.25
    }

    const [dat, setDat] = useState(defaultDat)


    //----------------------------------------------------------
    // Lifecycle Event Handlers Section
    //----------------------------------------------------------
    setTimeout(() => {
        setDat({...dat, motionSpeed: 2.0})
    }, 4000)


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const handleUpdate = (newData) => {
        setDat({...dat, ...newData})

        props.datUpdate({
            ...dat,
            ...newData
        })
    }

    //----------------------------------------------------------
    const SaveDatGui = () => {
       localStorage.setItem('dat', JSON.stringify(dat))
    }

    //----------------------------------------------------------
    const LoadDatGui = async () => {
        const storedState = await JSON.parse(localStorage.getItem('dat'))
        setDat(storedState ? storedState : defaultState)
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <figure className="dat">

            <DatGui data={dat}
                onUpdate={(e) => handleUpdate(e)}
                style={{zIndex:9999, left: 0 + 'px'}}
                labelWidth={'35%'}
            >

                <DatFolder
                    title={'Lights Control'}
                    closed={true}
                >
                    <DatNumber
                        path='magentaLight'
                        label='Magenta'
                        min={0.0}
                        max={50.0}
                        step={0.2}
                    />

                    <DatNumber
                        path='blueLight'
                        label='Blue'
                        min={0.0}
                        max={50.0}
                        step={0.2}
                    />

                    <DatNumber
                        path='motionSpeed'
                        label='Motion Speed'
                        min={0.05}
                        max={5}
                        step={0.01}
                    />

                    <DatButton
                        label='Save Preferences'
                        onClick={() => { SaveDatGui() }}
                    />

                    <DatButton
                        label='Load Preferences'
                        onClick={async () => { await LoadDatGui() }}
                    />

                </DatFolder>

            </DatGui>

        </figure>
    )
}

export default Dat
