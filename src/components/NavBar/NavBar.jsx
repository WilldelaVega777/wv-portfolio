//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import './NavBar.scss'

import { Link }                 from "gatsby"
import { useContext }           from "react"

import PageContext              from "../../context/page-context"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = (props) => {

    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    const config = useContext(PageContext)


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <nav id="nav">
            <Link to="/">
                <img className="logo-link"
                     src="../images/Logo.png"
                     alt="WV Logo"
                />
            </Link>
            <Link to="/presentation">
                Hi, I'm Will
            </Link>
            <Link to="/portfolio">
                My Portfolio
            </Link>
            <Link to="/featured">
                Favorite Projects
            </Link>
            <Link to="/certifications">
                Some Certifications
            </Link>
            <Link to="/resume">
                My Resume
            </Link>
            <Link to="/diplomas">
                A Few Diplomas
            </Link>
            <a href="#" className="under-construction">
                🚧 Under Construction 🚧
            </a>
            <div className={"lets-talk "  + (config.scroll ? "move-right" : "move-left")}>
                <Link to="/contact"
                    className="lets-talk"
                >
                    ☎️ &nbsp; Let's Talk!
                </Link>
            </div>
        </nav>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default NavBar
