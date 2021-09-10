//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import { useEffect }            from 'react'
import { useRef }               from 'react'

import 'animate.css/animate.css'
import './LetsTalk.scss'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const LetsTalk = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const phone = useRef()


    //----------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //----------------------------------------------------------
    useEffect(() => {
        doAnimation(true)
    }, [])


    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const doAnimation = (animate) => {

        setTimeout(() => {

            if (phone.current && animate)
            {
                phone.current.addEventListener('animationend', () => {
                    if (
                        phone.current &&
                        phone.current.classList.contains('animate__animated') &&
                        phone.current.classList.contains('animate__tada')
                    )
                    {
                        phone.current.classList.remove(
                            'animate__animated',
                            'animate__tada'
                        )
                    }
                })
            }
            else
            {
                if (
                    phone.current &&
                    phone.current.classList.contains('animate__animated') &&
                    phone.current.classList.contains('animate__tada')
                )
                {
                    phone.current?.classList.remove(
                        'animate__animated',
                        'animate__tada'
                    )
                }

                if (phone.current)
                {
                    phone.current?.classList.add(
                        'animate__animated',
                        'animate__tada'
                    )
                }
            }

            doAnimation()

        }, (getRandom(1,8) * 1000))
    }

    //----------------------------------------------------------
    const getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (

        <span>
            <span ref={phone} className="lets-talk-phone">
                ☎️
            </span>
            &nbsp;&nbsp; Let's Talk!
        </span>

    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default LetsTalk
