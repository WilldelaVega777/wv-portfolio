//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import MailIcon         from '@material-ui/icons/Mail'
import LinkedInIcon     from '@material-ui/icons/LinkedIn'
import PhoneIcon        from '@material-ui/icons/Phone'
import SkypeIcon        from './Skype'
import ScheduleIcon     from '@material-ui/icons/Schedule'

import './Footer.scss'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="contact-email">
                        <a
                            href="mailto:WilldelaVega777@gmail.com"
                            target="_blank"
                        >
                            <div className="image-link">
                                <MailIcon/>
                            </div>
                            <div className="text-link">
                                &nbsp; WilldelaVega777@gmail.com
                            </div>
                        </a>
                    </div>
                    <div className="contact-linkedin">
                        <a
                            href="https://www.linkedin.com/in/willdelavega/?locale=en_US"
                            target="_blank"
                        >
                            <div className="image-link">
                                <LinkedInIcon/>
                            </div>
                            <div className="text-link">
                                &nbsp; /in/willdelavega
                            </div>
                        </a>
                    </div>
                    <div className="contact-phone">
                        <a href="skype:+6196000278?call">
                            <div className="image-link">
                                <PhoneIcon/>
                            </div>
                            <div className="text-link">
                                &nbsp; (619) 600-0278
                            </div>
                        </a>
                    </div>
                    <div className="contact-skype">
                        <a href="skype:WilldelaVega777?chat">
                            <div className="image-link">
                                <SkypeIcon/>
                            </div>
                            <div className="text-link">
                                &nbsp; WilldelaVega777
                            </div>
                        </a>
                    </div>
                    <div className="last-published">
                        <a href="#" style={{ marginTop: '9px' }}>
                            <div className="image-link">
                                <ScheduleIcon/>
                            </div>
                            <div className="text-link">
                                &nbsp; Updated: May 2022
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Footer
