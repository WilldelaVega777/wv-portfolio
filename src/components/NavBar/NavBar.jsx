//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React        from "react"
import './NavBar.scss'

import { Link }          from "gatsby"
import { useContext }    from "react"
import { useRef }        from "react"

import SiteContext       from "../../context/site-context"
import LetsTalk          from "../../components/NavBar/LetsTalk/LetsTalk"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = (props) => {

    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    const ctx           = useContext(SiteContext)
    const presentation  = useRef()


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <nav id="nav">
            <Link
                to="/"
                activeClassName="active"
            >
                <img className="logo-link"
                    src="/images/Logo.png"
                    alt="WV Logo"
                />
            </Link>
            <Link
                ref={presentation}
                to="/presentation"
                activeClassName="active"
                getProps={({isCurrent}) => {
                    return (
                        ((ctx.activatePresentationLink === 'presentation') ||
                        (isCurrent)) ?
                        { className: "active" } :
                        {}
                    )
                }}
            >
                Hi, I'm Will
            </Link>
            <Link
                to="/portfolio"
                activeClassName="active"
            >
                My Portfolio
            </Link>
            <Link
                to="/featured"
                activeClassName="active"
            >
                Favorite Projects
            </Link>
            <Link
                to="/certifications"
                activeClassName="active"
            >
                Some Certifications
            </Link>
            <Link
                to="/resume"
                activeClassName="active"
            >
                My Resume
            </Link>
            <Link
                to="/diplomas"
                activeClassName="active"
            >
                A Few Diplomas
            </Link>
            <a href="#" className="under-construction">
                🚧 Under Construction 🚧
            </a>
            <div className={"lets-talk "  + (ctx.scroll ? "move-right" : "move-left")}>
                <Link to="/contact"
                    className="lets-talk"
                    activeClassName="active"
                >
                    <LetsTalk/>
                </Link>
            </div>
        </nav>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default NavBar
