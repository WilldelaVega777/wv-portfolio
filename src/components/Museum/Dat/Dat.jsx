//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
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
        posX: 0,
        posY: 0,
        posZ: 0
    }

    const [dat, setDat] = useState(defaultDat)


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
                    labelWidth={'10%'}
            >

                <DatFolder
                    title={'Sign Position'}
                    closed={true}
                >
                    <DatNumber
                        path='posX'
                        label='X'
                        min={-700}
                        max={700}
                        step={2.5}
                    />
                    <DatNumber
                        path='posY'
                        label='Y'
                        min={-60}
                        max={300}
                        step={2.5}
                    />
                    <DatNumber
                        path='posZ'
                        label='Z'
                        min={-1200}
                        max={1200}
                        step={2.5}
                    />
                </DatFolder>

                <DatButton
                    label='Save Position Data'
                    onClick={() => { SaveDatGui() }}
                />
                <DatButton
                    label='Load Position Data'
                    onClick={async () => { await LoadDatGui() }}
                />

            </DatGui>

            {/*
             <div className="debug-container">
                <div className="debug">
                    {`${props.debug.dataLabel}: ${props.debug.dataValue}`}
                </div>
            </div>
            */}

        </figure>
    )
}

export default Dat
