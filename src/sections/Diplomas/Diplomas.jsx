//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import { Suspense }     from "react"
import Museum           from "../../components/Museum/Museum.jsx"
import "./Diplomas.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Diplomas = (props) => {


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
