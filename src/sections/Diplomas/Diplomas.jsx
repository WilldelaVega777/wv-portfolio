//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useRef }               from "react"
import { Suspense }             from "react"
import "./Diplomas.scss"

import Museum                   from "../../components/Museum/Museum.jsx"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Diplomas = (props) => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const diplomasRef = useRef()


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section ref={diplomasRef} id="diplomas" className="diplomas">

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
