//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import "../styles/index.scss"

import Hero             from '../components/Hero/Hero'
import Presentation     from '../components/Presentation/Presentation'
import Portfolio        from '../components/Portfolio/Portfolio'
import Featured         from '../components/Featured/Featured'
import Resume           from '../components/Resume/Resume'
import Certifications   from '../components/Certifications/Certifications'
import Diplomas         from '../components/Diplomas/Diplomas'
import Contact          from '../components/Contact/Contact'

import { useRef }       from "react"
import { useEffect }    from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const IndexPage = () => {

    //----------------------------------------------------------
    // Lifecycle Events
    //----------------------------------------------------------
    useEffect(() => {
        document.body.id = 'app'
    }, [])


    //----------------------------------------------------------
    // Page Functions
    //----------------------------------------------------------
    const deactivateScroll = (pEvent) => {
        document.body.style.overflowY = 'hidden'
    }

    //----------------------------------------------------------
    const activateScroll = (pEvent) => {
        document.body.style.overflowY = 'scroll'
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <React.Fragment>
            <Hero enter={() => deactivateScroll()}
                  leave={() => activateScroll()}
            />
            <Presentation/>
            <Portfolio/>
            <Featured/>
            <Resume/>
            <Certifications/>
            <Diplomas/>
            <Contact/>
        </React.Fragment>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default IndexPage
