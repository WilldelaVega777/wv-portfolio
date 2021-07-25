//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import './NavBar.scss'

import { Link }             from "@reach/router"
import { useEffect }        from "react"
import { useContext }       from "react"
import { globalHistory }    from "@reach/router"
import { navigate }         from "@reach/router"

import { gsap }             from "gsap"
import { ScrollToPlugin }   from "gsap/ScrollToPlugin"

import PageContext          from "../../context/page-context"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = (props) => {

    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    const config = useContext(PageContext)
    gsap.registerPlugin(ScrollToPlugin)


    //----------------------------------------------------------
    // Listener Declaration Section
    //----------------------------------------------------------
    useEffect(() => {

        let timeline
        globalHistory.listen(async ({ action, location }) => {
            if (action === 'PUSH') {
                switch (location.hash)
                {
                    case '#hero':
                        timeline = gsap.to(
                            window,
                            {
                                duration: 1,
                                scrollTo: {
                                    y: location.hash,
                                    onComplete: () => {
                                        config.updateFixTop()
                                    }
                                }
                            }
                        )
                        break
                    case '#presentation':
                        gsap.to(
                            window,
                            {
                                duration: 1,
                                scrollTo: {
                                    y: location.hash,
                                    offsetY: 50
                                }
                            }
                        )
                        break
                    case '#nav':
                        timeline = gsap.to(
                            window,
                            {
                                duration: 1,
                                scrollTo: {
                                    y: location.hash,
                                    offsetY: -50,
                                    onComplete: async () => {
                                        setTimeout(async () => {
                                            await navigate('#presentation')
                                        }, 200)
                                    }
                                }
                            }
                        )
                        break
                    default:
                        gsap.to(
                            window,
                            {
                                duration: 1,
                                scrollTo: {
                                    y: location.hash,
                                    offsetY: 50
                                }
                            }
                        )
                        break
                }
            }

        })

    }, [])




    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <nav id="nav">
            <Link to="#hero">
                <img className="logo-link"
                     src="./images/Logo.png"
                     alt="WV Logo"
                />
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
            <Link to="#certifications">
                Some Certifications
            </Link>
            <Link to="#resume">
                My Resume
            </Link>
            <Link to="#diplomas">
                A Few Diplomas
            </Link>
            <div className={"lets-talk "  + (config.scroll ? "move-right" : "move-left")}>
                <Link to="#contact"
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
