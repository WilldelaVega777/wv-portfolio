//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { Suspense }         from "react"
import "./Portfolio.scss"

import Carousel3d           from "../../components/Carousel3d/Carousel3d.jsx"


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
    const getTextName = (index) => {
        return `/images/Portfolio/d${index}.png`
    }

    //----------------------------------------------------------
    const getIImageName = (index) => {
        return `/images/Portfolio/pi${index}.png`
    }

    //----------------------------------------------------------
    const getITextName = (index) => {
        return `/images/Portfolio/di${index}.png`
    }


    //----------------------------------------------------------
    // Component Variables Section
    //----------------------------------------------------------
    let items = [
        {
            id: 0,
            src: getImageName(1),
            text: getTextName(1),
            iSrc: getIImageName(1),
            iText: getITextName(1)
        },
        {
            id: 1,
            src: getImageName(2),
            text: getTextName(2),
            iSrc: getIImageName(2),
            iText: getITextName(2)
        },
        {
            id: 2,
            src: getImageName(3),
            text: getTextName(3),
            iSrc: getIImageName(3),
            iText: getITextName(3)
        },
        {
            id: 3,
            src: getImageName(4),
            text: getTextName(4),
            iSrc: getIImageName(4),
            iText: getITextName(4)
        },
        {
            id: 4,
            src: getImageName(5),
            text: getTextName(5),
            iSrc: getIImageName(5),
            iText: getITextName(5)
        },
        {
            id: 5,
            src: getImageName(6),
            text: getTextName(6),
            iSrc: getIImageName(6),
            iText: getITextName(6)
        },
        {
            id: 6,
            src: getImageName(7),
            text: getTextName(7),
            iSrc: getIImageName(7),
            iText: getITextName(7)
        },
        {
            id: 7,
            src: getImageName(8),
            text: getTextName(8),
            iSrc: getIImageName(8),
            iText: getITextName(8)
        }
    ]

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="portfolio"
                 className="portfolio"
        >
            <div className="portfolio-title">
                <h1>PORTFOLIO COMPONENT</h1>
            </div>
            <article>
                Lorem ipsum sit amet, consectetur adipiscing elit in fac mexicus
                Kamala Harris, President, AMLO in locus mentecatus datus gobernatus adipiscing
                malus estadus confederatus et chompiras.
                Lorem ipsum sit amet, consectetur adipiscing elit in fac mexicus
                Kamala Harris, President, AMLO in locus mentecatus datus gobernatus adipiscing
                malus estadus confederatus et chompiras.
                Lorem ipsum sit amet, consectetur adipiscing elit in fac mexicus
                Kamala Harris, President, AMLO in locus mentecatus datus gobernatus adipiscing
                malus estadus confederatus et chompiras.
                Lorem ipsum sit amet, consectetur adipiscing elit in fac mexicus
                Kamala Harris, President, AMLO in locus mentecatus datus gobernatus adipiscing
                malus estadus confederatus et chompiras.
            </article>

            <Suspense fallback={
                <div>
                    Loading...
                </div>
            }>
                <Carousel3d items={items}/>
            </Suspense>

        </section>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Portfolio

