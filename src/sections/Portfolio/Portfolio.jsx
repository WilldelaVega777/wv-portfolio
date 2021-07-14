//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import "./Portfolio.scss"

import Carousel3d           from "../../components/Carousel3d/Carousel3d.jsx"

import { useRef }           from "react"
import { useEffect }        from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Portfolio = (props) => {

    //----------------------------------------------------------
    // Component Variables Section
    //----------------------------------------------------------
    const portfolioCanvas  = useRef(null)
    let   items = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ]


    //----------------------------------------------------------
    // Lifecycle Methods Section
    //----------------------------------------------------------
    useEffect(() => {

    }, [])

    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const portfolioCanvas_onMouseEnter = () => {
        props.enter()
    }

    //----------------------------------------------------------
    const portfolioCanvas_onMouseLeave = () => {
        props.leave()
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="portfolio"
                 className="portfolio"
                 onMouseOver={()  => portfolioCanvas_onMouseEnter()}
                 onMouseLeave={() => portfolioCanvas_onMouseLeave()}
        >
            <div className="portfolio-title">
                <h1>PORTFOLIO COMPONENT</h1>
            </div>

            <Carousel3d items={items}/>

        </section>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Portfolio

