//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import { useState }     from "react"

import { Alert }        from '@material-ui/lab'
import { AlertTitle }   from '@material-ui/lab'
import Zoom             from '@material-ui/core/Zoom';

import ContactForm      from "../../components/Contact/ContactForm"

import "./ContactSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const ContactSection = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const [wrongData, setWrongData] = useState(false)
    const [dataSent, setDataSent] = useState(false)


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="contact" className="contact">

            <Zoom in={wrongData}>
                <div className="wrong-data">
                    <Alert severity="warning">
                        <AlertTitle>
                            Warning
                        </AlertTitle>
                        The contact form data is not valid — check it out!
                    </Alert>
                    { void setTimeout(() => { setWrongData(false) }, 3000) }
                </div>
            </Zoom>

            <Zoom in={dataSent}>
                <div className="data-sent">
                    <Alert severity="success">
                        <AlertTitle>
                            Success
                        </AlertTitle>
                        Contact Data has been sent, I will contact you soon, thank you 🙂
                    </Alert>
                    { void setTimeout(() => { setDataSent(false) }, 3000) }
                </div>
            </Zoom>

            <h1>Let's get in touch...</h1>
            <div className="contact-container">
                <div className="form">
                    <h2>
                        Please leave some contact information to talk as soon as today.
                    </h2>
                    <ContactForm
                        wrongData={() => {setWrongData(true)}}
                        dataSent={() => {setDataSent(true)}}
                    />
                </div>
                <div className="visuals">
                </div>
            </div>
        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default ContactSection
