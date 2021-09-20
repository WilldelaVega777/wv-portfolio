//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useEffect }        from "react"
import { useContext }       from "react"

import SiteContext          from "../context/site-context"
import Layout               from "../components/Layout/Layout"
import DiplomasSection      from '../sections/Diplomas/Diplomas'

import "../styles/site.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const DiplomasPage = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const config = useContext(SiteContext)


    //----------------------------------------------------------
    // Lifecycle Event Handler Method Section
    //----------------------------------------------------------
    useEffect(() => {
        window.document.body.id = "app"
        config.updateActivatePresentationLink(undefined)
    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Layout>
            <DiplomasSection/>
        </Layout>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default DiplomasPage
