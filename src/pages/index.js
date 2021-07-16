//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import "../styles/index.scss"

import Hero             from '../sections/Hero/Hero'
import NavBar           from '../sections/NavBar/NavBar'
import Presentation     from '../sections/Presentation/Presentation'
import Portfolio        from '../sections/Portfolio/Portfolio'
import Featured         from '../sections/Featured/Featured'
import Resume           from '../sections/Resume/Resume'
import Certifications   from '../sections/Certifications/Certifications'
import Diplomas         from '../sections/Diplomas/Diplomas'
import Contact          from '../sections/Contact/Contact'
import Footer           from '../sections/Footer/Footer'

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

        window.onscroll = function() {

        }

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
            <NavBar/>
            <Presentation/>
            <Portfolio enter={() => deactivateScroll()}
                       leave={() => activateScroll()}
            />
            <Featured/>
            <Resume/>
            <Certifications/>
            <Diplomas/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default IndexPage
