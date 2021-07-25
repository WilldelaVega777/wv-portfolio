//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useEffect }        from "react"
import "../styles/index.scss"


import Hero                 from '../sections/Hero/Hero'
import NavBar               from '../sections/NavBar/NavBar'
import Presentation         from '../sections/Presentation/Presentation'
import Portfolio            from '../sections/Portfolio/Portfolio'
import Featured             from '../sections/Featured/Featured'
import Resume               from '../sections/Resume/Resume'
import Certifications       from '../sections/Certifications/Certifications'
import Diplomas             from '../sections/Diplomas/Diplomas'
import Contact              from '../sections/Contact/Contact'
import Footer               from '../sections/Footer/Footer'

import { PageProvider } from "../context/page-context"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const IndexPage = () => {

    //----------------------------------------------------------
    // Lifecycle Event Handler Method Section
    //----------------------------------------------------------
    useEffect(() => {
        window.document.body.id = "app"
    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <PageProvider>
            <React.Fragment>
                <Hero/>
                <NavBar/>
                <Presentation/>
                <Portfolio/>
                <Featured/>
                <Certifications/>
                <Resume/>
                <Diplomas/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        </PageProvider>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default IndexPage
