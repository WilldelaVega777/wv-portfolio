//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { Suspense }             from "react"
import "./Diplomas.scss"

import Museum                   from "../../components/Museum/Museum.jsx"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Diplomas = (props) => {

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="diplomas" className="diplomas">

            <Suspense fallback={
                <div>
                    Loading...
                </div>
            }>
                <Museum/>
            </Suspense>

        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Diplomas
