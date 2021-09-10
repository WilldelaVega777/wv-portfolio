//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { Suspense }         from "react"
import Gallery              from "../../components/Gallery/Gallery.jsx"

import "./CertificationsSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const CertificationsSection = () => {

    const isBrowser = typeof window !== "undefined"

    return (
        <section
            id="certifications"
            className="certifications"
        >
            <Gallery/>
        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default CertificationsSection
