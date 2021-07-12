//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import "./Hero.scss"

import { Timeline }         from 'react-gsap';
import { PlayState }        from 'react-gsap';
import { Tween }            from 'react-gsap';

import { useRef }           from "react"
import { useEffect }        from "react"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Hero = (props) => {

    //----------------------------------------------------------
    // Initialize Variables Section
    //----------------------------------------------------------
    const heroCanvas        = useRef(null)
    const backendArticle    = useRef(null)
    const frontendArticle   = useRef(null)
    const frontendText      = useRef(null)
    const backendText       = useRef(null)
    const heroText          = useRef(null)
    const heroMask          = useRef(null)
    const frontEndAnimation = useRef(null)
    const NUMBER_OF_IMAGES  = 58
    let current             = 1
    let context             = null
    let image               = new Image()


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

            // Initial Settings
            backendText.current.style.opacity = '0'

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
    // Event Handler Methods Section
    //----------------------------------------------------------
    const heroCanvas_onWheel = (pEvent) =>
    {
        if (document.body.style.overflowY !== 'hidden')
        {
            return
        }

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
            if (current >= NUMBER_OF_IMAGES)
            {
                current = NUMBER_OF_IMAGES
            }
            else
            {
                current++
            }
        }

        //------------------------------------------------------
        // Animations by Frame
        //------------------------------------------------------
        // Main Title
        if (current <= 10)
        {
            heroText.current.style.marginTop = `${((current * 15) * -1)}px`
            heroText.current.style.opacity = (1.0 - (current / 5))
        }

        // Show Mask
        if (current >= 35)
        {
            heroMask.current.style.opacity = (.04 * current)
        }
        else
        {
            heroMask.current.style.opacity = 0
        }

        // Show FrontEnd Article
        if (current === 15)
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

        requestAnimationFrame(() => {
            if (current > 20)
            {
                update((current - 20))
            }
        })
    }

    //----------------------------------------------------------
    const heroCanvas_onMouseEnter = () => {
        heroText.current.classList.add('hero-text-scroll-off')
        props.enter()
    }

    //----------------------------------------------------------
    const heroCanvas_onMouseLeave = () => {
        heroText.current.classList.remove('hero-text-scroll-off')
        props.leave()
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
    const removePx = (exp) =>
        parseInt(exp.toString().substring(0, exp.toString().indexOf('px')))

    //----------------------------------------------------------
    const update = (index) => {
        const context = heroCanvas.current.getContext('2d')
        image.onload = () => {
            context.drawImage(image, 0, 0)
        }
        image.src = currentFrame(index)
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section className="hero"
                 onWheel={(e) => heroCanvas_onWheel(e)}
                 onMouseOver={() => heroCanvas_onMouseEnter()}
                 onMouseLeave={() => heroCanvas_onMouseLeave()}
        >

            <div ref={heroText} className="hero-text">
                THE WATCHMEN
            </div>

            <img ref={heroMask} className="hero-mask" src="/images/Hero/Hero-Back.png"/>

            <canvas ref={heroCanvas}
                    className="hero"
                    onWheel={(e) => heroCanvas_onWheel(e)}
            >
            </canvas>

            <Timeline ref={frontEndAnimation}
                      playState={PlayState.stop}
                      target={
                <article ref={frontendArticle}
                        className="heroFront"
                >
                    <div ref={frontendText}>
                        <h1>Front End</h1>
                        <p>
                            Lorem Ipsum Dolor sit amet consectetur
                            boris malos noff justus novicius mentecatus et justo
                            et metropolis austerus mexicus Kabala Harris president
                            Lorem Ipsum Dolor sit amet consectetur
                            boris malos noff justus novicius mentecatus et justo
                            et metropolis austerus mexicus Kabala Harris president
                            Lorem Ipsum Dolor sit amet consectetur
                            boris malos noff justus novicius mentecatus et justo
                            et metropolis austerus mexicus Kabala Harris president
                        </p>
                    </div>
                </article>
            }>
                <Tween to={{ x: '350px', opacity: 1.0 }} duration={2} ease="back.out(1.7)"/>
            </Timeline>


            <article ref={backendArticle}
                     className="heroBack"
            >
                <div ref={backendText}>
                    <h1>Back End</h1>
                    <p>
                        Lorem Ipsum Dolor sit amet consectetur
                        boris malos noff justus novicius mentecatus et justo
                        et metropolis austerus mexicus Kabala Harris president
                        Lorem Ipsum Dolor sit amet consectetur
                        boris malos noff justus novicius mentecatus et justo
                        et metropolis austerus mexicus Kabala Harris president
                        Lorem Ipsum Dolor sit amet consectetur
                        boris malos noff justus novicius mentecatus et justo
                        et metropolis austerus mexicus Kabala Harris president
                    </p>
                </div>
            </article>

        </section>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Hero
