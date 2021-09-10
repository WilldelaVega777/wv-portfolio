//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import Particles        from 'react-particles-js'
import Resume           from '../../components/Resume/Resume'
import particles        from './particles-config.json'

import './ResumeSection.scss'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const ResumeSection = () => {

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section className="resume">
            <Particles params={particles}/>
            <div id='main' className="resume-container scroll">
                <Resume/>
            </div>
        </section>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default ResumeSection
