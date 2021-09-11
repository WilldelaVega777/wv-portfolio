//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import "./HeroSection.scss"

import { Timeline }         from 'react-gsap';
import { PlayState }        from 'react-gsap';
import { Tween }            from 'react-gsap';

import { useRef }           from "react"
import { useEffect }        from "react"
import { useContext }       from "react"
import SiteContext          from "../../context/site-context"

import { navigate }         from "@reach/router"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const HeroSection = (props) => {

    //----------------------------------------------------------
    // Initialize Variables Section
    //----------------------------------------------------------
    const isBrowser = (typeof window !== "undefined")
    const NUMBER_OF_IMAGES  = 38
    const heroCanvas        = useRef(null)
    const frontendText      = useRef(null)
    const backendText       = useRef(null)
    const heroText          = useRef(null)
    const heroMask          = useRef(null)
    const frontEndAnimation = useRef(null)
    const backEndAnimation  = useRef(null)
    const config            = useContext(SiteContext)
    let current             = 1
    let context             = null
    let image               = (isBrowser ? new Image() : null)


    //----------------------------------------------------------
    // Lifecycle Events Section
    //----------------------------------------------------------
    useEffect(() => {
        const componentDidMount = async () => {

            // Preload Images
            const images = []
            for (let i = 1; i <= NUMBER_OF_IMAGES; i++)
            {
                images.push(currentFrame(i))
            }

            await cacheImages(images)

            // Load First Image
            heroCanvas.current.width        = 1400
            heroCanvas.current.height       = 788
            context = heroCanvas.current.getContext('2d')
            context.clearRect(
                0,
                0,
                context.canvas.width,
                context.canvas.height
            )

            update(current)
        }

        componentDidMount()

    }, [])

    //----------------------------------------------------------
    useEffect(() => {

        rewind()

    }, [config.fixTop])


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const heroCanvas_onWheel = async (pEvent) =>
    {

        // Get Direction and Current
        const direction = ((pEvent.deltaY < 0) ? 'up' : 'down')
        if (direction === 'up')
        {
            if (current <= 1)
            {
                current = 1
            }
            else
            {
                current--
            }
        }
        else
        {
            current++
        }

        animate(current, direction)

    }

    //----------------------------------------------------------
    const heroCanvas_onMouseEnter = () => {

        if (config.scroll)
        {
            config.toggleScroll()
            heroText.current.classList.add('text-scroll-off')
        }

    }


    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
            return new Promise((resolve, reject) => {
                image = new Image()
                image.onload = resolve()
                image.onerror = reject()
                image.src = src
            })
        })
        await Promise.all(promises)
    }

    //----------------------------------------------------------
    const currentFrame = (index) =>
    `/images/Hero/Hero_${index.toString().padStart(2,'0')}.jpg`

    //----------------------------------------------------------
    const update = (index) => {

        if (heroCanvas.current)
        {
            const context = heroCanvas.current.getContext('2d')
            image.onload = () => {
                context.drawImage(image, 0, 0)
            }
            image.src = currentFrame(index)
        }
    }

    //----------------------------------------------------------
    const rewind = () => {
        current = 1
        frontEndAnimation.current.getGSAP().seek(0)
        frontEndAnimation.current.getGSAP().pause()
        backEndAnimation.current.getGSAP().seek(0)
        backEndAnimation.current.getGSAP().pause()
        animate(current, 'up')
    }

    //----------------------------------------------------------
    const rewindAsync = () => {
        return new Promise((resolve, reject) => {
            current = 1
            frontEndAnimation.current.getGSAP().seek(0)
            frontEndAnimation.current.getGSAP().pause()
            backEndAnimation.current.getGSAP().seek(0)
            backEndAnimation.current.getGSAP().pause()
            animate(current, 'up')
            resolve(true)
        })
    }


    //----------------------------------------------------------
    const animate = async (current, direction) => {
        //------------------------------------------------------
        // Animations by Frame
        //------------------------------------------------------
        // Main Title
        if (current <= 5)
        {
            heroText.current.style.marginTop = `${((current * 15) * -1)}px`
            heroText.current.style.opacity = (1.0 - (current / 5))
        }
        // Show FrontEnd Article
        else if (current === 10)
        {
            if (direction === 'down')
            {
                frontEndAnimation.current.getGSAP().play(0)
            }
            else
            {
                frontEndAnimation.current.getGSAP().timeScale(
                    frontEndAnimation.current.getGSAP().duration()
                ).reverse()
            }
        }

        // Show Mask
        if (current >= 35)
        {
            // Removes FrontEnd Article
            if (current === 36)
            {
                frontEndAnimation.current.getGSAP().timeScale(
                    frontEndAnimation.current.getGSAP().duration()
                ).reverse()
            }

            if ((current === 48) && (direction === 'down'))
            {
                // Brings up BackEnd Article
                backEndAnimation.current.getGSAP().play(0)
            }
            else if ((current === 40) && (direction === 'up'))
            {
                // Removes BackEnd Article
                backEndAnimation.current.getGSAP().timeScale(
                    backEndAnimation.current.getGSAP().duration()
                ).reverse()
            }

            heroMask.current.style.opacity = (.04 * current)
        }
        else
        {
            heroMask.current.style.opacity = 0
        }

        if (current === 65)
        {
            await navigate('/presentation/?automatic=true')
        }

        // Update Clock Animation
        requestAnimationFrame(() => {
            if (current > 15)
            {
                update((current - 15))
            }
            else if (current <= 15)
            {
                update(1)
            }
            else if (current > 38)
            {
                update(38)
            }
        })
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="hero"
                role="banner"
                className="hero"
                onWheel={(e) => heroCanvas_onWheel(e)}
                onMouseOver={()  => heroCanvas_onMouseEnter()}
                onFocus={()  => heroCanvas_onMouseEnter()}
        >
            <div ref={heroText} className="hero-text">
                SOFTWARE IS LIKE
                <br/>
                A CLASSIC CLOCK
            </div>

            <img ref={heroMask}
                 className="hero-mask"
                 src="/images/Hero/Hero-Back.png"
                 alt="mask"
                 draggable={false}
            />

            <canvas ref={heroCanvas}
                    className="hero"
                    onWheel={(e) => heroCanvas_onWheel(e)}
            >
            </canvas>

            <Timeline ref={frontEndAnimation}
                    playState={PlayState.stop}
                    target={
                <article className="heroFront"
                >
                    <div ref={frontendText}>
                        <h1>Front End</h1>
                        <p>
                            It needs to be built with proper care, its design
                            requires a good understanding of user interactions
                            in order to create experiences that are sticky, that
                            means keeping the user coming back for more.
                            <br/>
                            A good understanding of design principles combined with
                            the right amount of innovation, is rare in most developers.
                            That ability to give life to comps with Adobe XD and Photoshop,
                            create and manipulate 3D models, Animations and extreme
                            attention to detail is what makes the difference.
                        </p>
                    </div>
                </article>
            }>
                <Tween to={{ x: '350px', opacity: 1.0 }} duration={2} ease="back.out(1.7)"/>
            </Timeline>

            <Timeline ref={backEndAnimation}
                    playState={PlayState.stop}
                    target={
                <article className="heroBack"
                >
                    <div ref={backendText}>
                        <h1>Back End</h1>
                        <p>
                            A Web application not only needs to be beautiful,
                            responsive and interactive, but it often needs to adress
                            thousands of requests per minute, be secure and fault
                            tolerant, it should scale as the user base grows and
                            provide infrastructure for logging and diagnostics, as
                            well for managing async tasks with queues for more
                            complex workflows and improved read/write database access.
                            <br/>
                            The ability to deploy in the cloud to AWS, Azure and
                            Google Cloud are key these days key for the success of
                            any full stack developer. Back end is not what you see,
                            but if it fails you surely know that the business won't
                            be right.
                        </p>
                    </div>
                </article>
            }>
                <Tween to  ={{ x: '700px', opacity: 1.0 }} duration={2} ease="back.out(1.7)"/>
            </Timeline>


        </section>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default HeroSection
