//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import './NavBar.scss'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = () => {

    return (
        <nav>
            <a href="#hero">
                <img className="logo-link" src="./images/Logo.png" alt="WV Logo"/>
            </a>
            <a href="#presentation">
                Hi, I'm Will
            </a>
            <a href="#portfolio">
                My Portfolio
            </a>
            <a href="#featured">
                Favorite Projects
            </a>
            <a href="#resume">
                Download my Resume
            </a>
            <a href="#certifications">
                Some Certifications
            </a>
            <a href="#diplomas">
                A Few Diplomas
            </a>
            <div className="lets-talk">
                <a className="lets-talk" href="#contact">
                ☎️ &nbsp; Let's Talk!
                </a>
            </div>
        </nav>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default NavBar
