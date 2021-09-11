//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React        from "react"
import './NavBar.scss'

import { useState }      from "react"
import { Link }          from "gatsby"
import { useContext }    from "react"
import { useRef }        from "react"

import { Badge }         from "@material-ui/core"
import List              from '@material-ui/core/List';
import ListItem          from '@material-ui/core/ListItem';
import ListItemIcon      from '@material-ui/core/ListItemIcon';
import ListItemText      from '@material-ui/core/ListItemText';
import Divider           from '@material-ui/core/Divider';

import ArrowRightIcon    from '@material-ui/icons/ArrowRight';

import NotificationsIcon from "@material-ui/icons/Notifications"

import SiteContext       from "../../context/site-context"
import LetsTalk          from "../../components/NavBar/LetsTalk/LetsTalk"
import SiteStatus        from "../../components/NavBar/SiteStatus/SiteStatus"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = (props) => {

    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    const ctx           = useContext(SiteContext)
    const [showStatus, setShowStatus] = useState(false)
    const presentation  = useRef(null)
    const notifications = useRef(null)


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
                <div ref={notifications} className="notifications">
                    <Badge badgeContent={1} color="error">
                        <NotificationsIcon onClick={() => {
                            setShowStatus(true)
                        }}/>
                        <SiteStatus
                            element={notifications.current}
                            show={showStatus}
                            reset={() => { setShowStatus(false) }}
                        >
                            <span>
                                This site is currently under heavy development.
                                <br/>
                                <br/>
                                Things pending to do are:
                                <br/>
                            </span>

                            <ul>
                                <li>
                                    Make the site responsive (1920x1080 optimized right now).
                                </li>
                                <li>
                                    Make 'Certifications' & 'Diplomas' pages load way faster.
                                </li>
                                <li>
                                    Improve loaders for 3D Content
                                </li>
                                <li>
                                    Add Video Presentation
                                </li>
                                <li>
                                    Add Political Campaign project to 'Featured Projects'
                                </li>
                                <li>
                                    Download Link for .doc and .pdf versions of my resume
                                </li>
                                <li>
                                    Add Transitions to pages (entrance and exit)
                                </li>
                                <li>
                                    Fix issue with 'cmd' key in 3d Content
                                </li>
                                <li>
                                    Complete Index page Animation
                                </li>
                            </ul>
                            Thanks for your visit and sorry for the inconvenience.
                            <br/>
                            <br/>
                            Please come back soon to see the finished version,
                            in the meantime I would like
                            <br/>
                            to invite you to visit
                            the 'Diplomas' page for a cool 3D experience.
                            <br/>
                            <br/>
                            Please be patient, right now it takes 1 min. to load with
                            a 20mbits connection.
                        </SiteStatus>
                    </Badge>
                </div>
                <div className="contact">
                    <Link to="/contact"
                        className="lets-talk"
                        activeClassName="active"
                    >
                        <LetsTalk/>
                    </Link>
                </div>
            </div>
        </nav>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default NavBar
