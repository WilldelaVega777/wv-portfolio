//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from "react"
import { SiteProvider }         from "../../context/site-context"

import NavBar                   from "../../components/NavBar/Mui/NavBar"
import Footer                   from "../../components/Footer/Footer"


import "../../styles/site.scss"

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Layout = ({ children }) =>
{
    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (

        <>
            <NavBar/>
            { children }
            <Footer/>
        </>

    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Layout
