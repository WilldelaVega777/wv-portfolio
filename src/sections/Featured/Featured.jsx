//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import { useEffect }    from 'react'
import { useRef }       from 'react'
import { gsap }         from 'gsap'

import Title            from "../../components/Resume/components/Title"
import Ripple           from "../../components/Backgrounds/Ripple"

import "./FeaturedSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const FeaturedSection = () => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const barra = useRef(null)


    //----------------------------------------------------------
    // Lifecycle Eventhandler Section
    //----------------------------------------------------------
    useEffect(() => {
        gsap.to(barra.current, {
            width: 1530,
            delay: 1,
            duration: 1.5, // duration of the animation
        });
    }, []);


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="featured" className="featured">
            <Ripple
                color={0x2a2a2a}
                orbit={true}
            />
            <div className="featured-container scroll">
            <Title
                    title={'The best'}
                    span={''}
            />

            </div>
        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default FeaturedSection
