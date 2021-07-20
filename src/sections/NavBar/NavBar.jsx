//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import './NavBar.scss'

import { Link }             from "@reach/router"
import { useEffect }        from "react"
import { useContext }       from "react"
import { globalHistory }    from "@reach/router"

import { gsap }             from "gsap"
import { ScrollToPlugin }   from "gsap/ScrollToPlugin"

import PageContext          from "../../context/page-context"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = () => {

    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    let config = useContext(PageContext)
    gsap.registerPlugin(ScrollToPlugin)


    //----------------------------------------------------------
    // Lifecycle Event Handlers Section
    //----------------------------------------------------------
    useEffect(() => {

        globalHistory.listen(({ action, location }) => {
            if (action === 'PUSH') {
                gsap.to(
                    window,
                    {
                        duration: 1,
                        scrollTo: {
                            y: location.hash,
                            offsetY: 50
                        }
                    }
                );
            }
        })

    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <nav>
            <Link to="#hero">
                <img className="logo-link" src="./images/Logo.png" alt="WV Logo"/>
            </Link>
            <Link to="#presentation">
                Hi, I'm Will
            </Link>
            <Link to="#portfolio">
                My Portfolio
            </Link>
            <Link to="#featured">
                Favorite Projects
            </Link>
            <Link to="#resume">
                Download my Resume
            </Link>
            <Link to="#certifications">
                Some Certifications
            </Link>
            <Link to="#diplomas">
                A Few Diplomas
            </Link>
            <div className="lets-talk">
                <Link className="lets-talk" to="#contact">
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
