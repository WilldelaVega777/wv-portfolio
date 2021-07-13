//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import "../styles/index.scss"

import Hero             from '../components/Hero/Hero'
import NavBar           from '../components/NavBar/NavBar'
import Presentation     from '../components/Presentation/Presentation'
import Portfolio        from '../components/Portfolio/Portfolio'
import Featured         from '../components/Featured/Featured'
import Resume           from '../components/Resume/Resume'
import Certifications   from '../components/Certifications/Certifications'
import Diplomas         from '../components/Diplomas/Diplomas'
import Contact          from '../components/Contact/Contact'
import Footer           from '../components/Footer/Footer'

import { useRef }       from "react"
import { useEffect }    from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const IndexPage = () => {
    //----------------------------------------------------------
    // Initial Vars
    //----------------------------------------------------------
    const navBar = useRef(null)


    //----------------------------------------------------------
    // Lifecycle Events
    //----------------------------------------------------------
    useEffect(() => {
        document.body.id = 'app'

        window.onscroll = function() {
            console.log('works')
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
            <NavBar ref={navBar}/>
            <Presentation/>
            <Portfolio/>
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
