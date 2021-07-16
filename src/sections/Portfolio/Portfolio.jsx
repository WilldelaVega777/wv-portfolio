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
    // Internal Functions Section
    //----------------------------------------------------------
    const getImageName = (index) => {
      return `/images/Portfolio/p${index}.png`
    }

    //----------------------------------------------------------
    // Component Variables Section
    //----------------------------------------------------------
    const portfolioCanvas  = useRef(null);


    let items = [
        {
            id: 0,
            src: getImageName(1)
        },
        {
            id: 1,
            src: getImageName(2)
        },
        {
            id: 2,
            src: getImageName(3)
        },
        {
            id: 3,
            src: getImageName(4)
        },
        {
            id: 4,
            src: getImageName(5)
        },
        {
            id: 5,
            src: getImageName(6)
        },
        {
            id: 6,
            src: getImageName(7)
        },
        {
            id: 7,
            src: getImageName(8)
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

