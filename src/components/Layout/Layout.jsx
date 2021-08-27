//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from "react"
import { PageProvider }         from "../../context/page-context"

import NavBar                   from "../../components/NavBar/NavBar"
import Footer                   from "../../components/Footer/Footer"


import IndexPage                from '../../pages/index'
import PortfolioPage            from '../../pages/portfolio'
import FeaturedPage             from '../../pages/featured'
import ResumePage               from '../../pages/resume'
import CertificationsPage       from '../../pages/certifications'
import DiplomasPage             from '../../pages/diplomas'
import ContactPage              from '../../pages/contact'

import "../../styles/site.scss"

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Layout = ({ children }) =>
{
    return (
        <PageProvider>
            <React.Fragment>
                <NavBar/>
                    { children }
                <Footer/>
            </React.Fragment>
        </PageProvider>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Layout
