//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React       from "react"
import { useEffect }    from 'react'
import { useRef }       from 'react'
import { gsap }         from 'gsap'
import Title            from "../../components/Resume/components/Title"
import Ripple           from "../../components/Backgrounds/Ripple"

import "./PresentationSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PresentationSection = () => {

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
        <section id="presentation" className="presentation">
            <Ripple
                color={0x2a2a2a}
                speed={15}
                amount={100}
                separation={3}
                orbit={false}
            />
            <div className="presentation-container scroll">
                <Title
                    title={'Hi there...'}
                    span={''}
                />
            </div>
        </section>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PresentationSection
