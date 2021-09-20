//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useEffect }        from "react"
import { useContext }       from "react"

import Layout               from "../components/Layout/Layout"
import PresentationSection  from '../sections/Presentation/Presentation'
import SiteContext          from "../context/site-context"

import "../styles/site.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PresentationPage = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const config = useContext(SiteContext)


    //----------------------------------------------------------
    // Lifecycle Event Handler Method Section
    //----------------------------------------------------------
    useEffect(() => {

        window.document.body.id = "app"

        if (config.requestActivate)
        {
            config.toggleRequestActivate()
            config.updateActivatePresentationLink('presentation')
        }

    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Layout>
            <PresentationSection/>
        </Layout>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PresentationPage
