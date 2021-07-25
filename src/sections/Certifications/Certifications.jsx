//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import { Suspense }     from "react"
import Gallery           from "../../components/Gallery/Gallery.jsx"
import "./Certifications.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Certifications = () => {


    return (
        <section id="certifications" className="certifications">
            <Suspense fallback={
                <div>
                    Loading...
                </div>
            }>
                <Gallery/>
            </Suspense>
        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Certifications
