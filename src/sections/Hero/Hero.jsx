//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useRef }           from "react"
import { useEffect }        from "react"
import { useContext }       from "react"

import canvasTxt            from "canvas-txt"
import { navigate }         from "gatsby"
import TweenMax             from 'gsap'

import ScrollDown           from "../../components/Indicators/ScrollDown"
import SiteContext          from "../../context/site-context"

import "./HeroSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const HeroSection = (props) => {

    //----------------------------------------------------------
    // Initialize Variables Section
    //----------------------------------------------------------
    const isBrowser = (typeof window !== "undefined")
    const NUMBER_OF_IMAGES  = 38
    const TITLE_FRAME       = 1
    const REMOVETITLE_FRAME = 2
    const FRONTEND_FRAME    = 5
    const REMOVEFRONT_FRAME = 7
    const BACKEND_FRAME     = 32
    const REMOVEBACK_FRAME  = 34
    const heroCanvas        = useRef(null)
    const config            = useContext(SiteContext)

    let current             = 1
    let ctx                 = null
    let image               = (isBrowser ? new Image() : null)
    let allowWheelUp        = true
    let allowWheelDown      = true
    let titlePoint          = {x:-600, y:0, alpha: 0.8, alphaBack: 0.3}
    let frontPoint          = {x:-600, y:120, alpha: 0}
    let backPoint           = {x:1800, y:320, alpha: 0}
    let unfadeTitleAnimRan  = false
    let titleAnimRunning    = false
    let frontAnimRunning    = false
    let backAnimRunning     = false


    //----------------------------------------------------------
    // Lifecycle Events Section
    //----------------------------------------------------------
    useEffect(() => {
        const componentDidMount = async () => {

            config.updateActivatePresentationLink(undefined)

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
            ctx = heroCanvas.current.getContext('2d')
            ctx.clearRect(
                0,
                0,
                ctx.canvas.width,
                ctx.canvas.height
            )

            ctx.globalAlpha = 0.3
            image.src = currentFrame(current)
            image.onload = () => {
                ctx.drawImage(image, 0, 0)
            }
            drawTitle(true)
        }

        componentDidMount()

    }, [])


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const heroCanvas_onWheel = async (pEvent) =>
    {
        // Get Direction and Current
        const direction = ((pEvent.deltaY < 0) ? 'up' : 'down')
        const context = heroCanvas.current.getContext('2d')

        if (context.globalAlpha !== 1)
        {
            context.globalAlpha = 1
        }

        if (direction === 'up')
        {
            if (
                (heroCanvas.current) &&
                (allowWheelUp)
            )
            {
                //----------------------------------------------
                // Check Boundaries
                //----------------------------------------------
                if (current <= 1)
                {
                    current = 1
                }
                else
                {
                    current--
                }

                //----------------------------------------------
                // Perform Actions
                //----------------------------------------------
                image.src = currentFrame(current)
                image.onload = () => {

                    if (current === TITLE_FRAME)
                    {
                        context.clearRect(
                            0,
                            0,
                            context.canvas.width,
                            context.canvas.height
                        )
                        context.globalAlpha = .3
                        allowWheelUp = false
                        allowWheelDown = false
                        titleAnimRunning = true
                        if (!unfadeTitleAnimRan)
                        {
                            unfadeTitle()
                        }
                        else
                        {
                            drawTitle(true)
                            allowWheelDown = true
                        }
                    }
                    else
                    {
                        context.drawImage(image, 0, 0)
                    }
                }

                if (
                    (current === (FRONTEND_FRAME-2)) &&
                    (frontAnimRunning)
                )
                {
                    frontAnimRunning = true
                    allowWheelUp = false
                    allowWheelDown = false
                    animateFrontEndRew(context)
                }
                else if (
                    (current === (BACKEND_FRAME-2)) &&
                    (backAnimRunning)
                )
                {
                    backAnimRunning = true
                    allowWheelUp = false
                    allowWheelDown = false
                    animateBackEndRew(context)
                }
            }
        }
        else
        {
            if (
                (heroCanvas.current) &&
                (allowWheelDown)
            )
            {
                //----------------------------------------------
                // Check Boundaries
                //----------------------------------------------
                if (current <= NUMBER_OF_IMAGES)
                {
                    current++
                }
                else
                {
                    current = NUMBER_OF_IMAGES
                }

                //----------------------------------------------
                // Perform Actions
                //----------------------------------------------
                image.src = currentFrame(current)
                image.onload = () => {
                    context.drawImage(image, 0, 0)
                }
                switch (current)
                {
                    case REMOVETITLE_FRAME:
                        titleAnimRunning = true
                        allowWheelUp = false
                        allowWheelDown = false
                        context.globalAlpha = .3
                        fadeTitle()
                        break

                    case FRONTEND_FRAME:
                        frontAnimRunning = true
                        allowWheelUp = false
                        allowWheelDown = false
                        context.drawImage(image, 0, 0)
                        animateFrontEnd(context)
                        break

                    case REMOVEFRONT_FRAME:
                        frontAnimRunning = true
                        allowWheelUp = false
                        allowWheelDown = false
                        context.drawImage(image, 0, 0)
                        animateFrontEndRew(context)
                        break

                    case BACKEND_FRAME:
                        backAnimRunning = true
                        allowWheelUp = false
                        allowWheelDown = false
                        context.drawImage(image, 0, 0)
                        animateBackEnd(context)
                        break

                    case REMOVEBACK_FRAME:
                        backAnimRunning = true
                        allowWheelUp = false
                        allowWheelDown = false
                        context.drawImage(image, 0, 0)
                        animateBackEndRew(context)
                        break

                    case NUMBER_OF_IMAGES:
                        config.toggleRequestActivate()
                        navigate('/presentation/')
                        break
                }
            }
        }
    }


    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const fadeTitle = () => {
        TweenMax.to(
            titlePoint,
            1.0,
            {
                y: -40,
                alpha: 0,
                alphaBack: 1,
                ease: "out(1.7)",
                onUpdate: drawTitle,
                onComplete: () => {
                    titlePoint = {x:-600, y:0, alpha: .5, alphaBack: .3}
                    allowWheelUp = true
                    allowWheelDown = true
                    unfadeTitleAnimRan = false
                }
            }
        )
    }

    //----------------------------------------------------------
    const unfadeTitle = () => {
        TweenMax.fromTo(
            titlePoint,
            1.5,
            {x:-600, y:-40, alpha: 0, alphaBack: 1},
            {
                y: 0,
                alpha: 0.5,
                alphaBack: 0.3,
                ease: "out(1.7)",
                onUpdate: drawTitle,
                onComplete: () => {
                    titlePoint = {x:-600, y:0, alpha: .5, alphaBack: .3}
                    titleAnimRunning = false
                    allowWheelUp = true
                    allowWheelDown = true
                    unfadeTitleAnimRan = true
                }
            }
        )
    }


    //----------------------------------------------------------
    const drawTitle = (start=false) => {
        // Get Context
        const ctx = heroCanvas.current.getContext('2d')

        // Draws Text
        ctx.save()

            ctx.clearRect(
                0,
                0,
                ctx.canvas.width,
                ctx.canvas.height
            )

            ctx.globalAlpha = (start ? 0.3 : titlePoint.alphaBack)
            ctx.drawImage(image, 0, 0)

            ctx.shadowOffsetX = 4
            ctx.shadowOffsetY = 4
            ctx.shadowBlur = 3
            ctx.shadowColor = "#000000"
            ctx.fillStyle = '#cc8e35';
            ctx.globalAlpha = (start ? 0.5 : titlePoint.alpha)

            canvasTxt.align = 'center'
            //canvasTxt.font="'Poppins Extra Bold'";
            canvasTxt.font="'Times New Roman'";
            canvasTxt.fontSize = 72
            canvasTxt.lineHeight = 80
            canvasTxt.drawText(
                ctx,
                'SOFTWARE IS LIKE\n' +
                'A CLASSIC CLOCK',
                340,
                titlePoint.y,
                700,
                700
            )
        ctx.restore()
    }

    //----------------------------------------------------------
    const animateFrontEnd = () => {
        TweenMax.to(
            frontPoint,
            1.5,
            {
                alpha: .95,
                x: 40,
                ease: "back.out(1.7)",
                onUpdate: drawFrontEnd,
                onComplete: () => {
                    allowWheelUp = true
                    allowWheelDown = true
                }
            }
        )
    }

    //----------------------------------------------------------
    const animateFrontEndRew = () => {
        TweenMax.to(
            frontPoint,
            1.5,
            {
                alpha: 0,
                x: -600,
                ease: "back.out(1.7)",
                onUpdate: drawFrontEnd,
                onComplete: () => {
                    frontPoint = {x:-600, y:120, alpha: 0}
                    frontAnimRunning = false
                    allowWheelUp = true
                    allowWheelDown = true
                }
            }
        )
    }

    //----------------------------------------------------------
    const drawFrontEnd = () => {

        const ctx = heroCanvas.current.getContext('2d')

        // Draws last loaded Image
        ctx.drawImage(image, 0, 0)

        // Draws Text
        ctx.save()
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 3;
            ctx.shadowColor = "#000000"
            ctx.fillStyle = '#cc8e35';
            ctx.globalAlpha = frontPoint.alpha


            canvasTxt.align = 'right'
            canvasTxt.font='Oxygen Bold';
            canvasTxt.fontSize = 36
            canvasTxt.drawText(
                ctx,
                'FrontEnd',
                frontPoint.x,
                frontPoint.y -275,
                600,
                600
            )

            canvasTxt.fontSize =  18
            canvasTxt.lineHeight = 24
            ctx.fillStyle = '#eeeeee';
            ctx.font=18+'px '+'Oxygen Bold';

            canvasTxt.drawText(
                ctx,
                "It needs to be built with proper care, its design\n" +
                "requires a good understanding of user interactions\n"+
                "in order to create experiences that are sticky, that\n" +
                "means keeping the user coming back for more.\n\n" +
                "A good understanding of design principles combined with\n" +
                "the right amount of innovation, is rare in most developers.\n" +
                "That ability to give life to comps with Adobe XD and Photoshop,\n" +
                "create and manipulate 3D models, Animations and extreme\n" +
                "attention to detail is what makes the difference.",
                frontPoint.x,
                frontPoint.y -120,
                600,
                600
            )
        ctx.restore()
    }

    //----------------------------------------------------------
    const animateBackEnd = () => {
        TweenMax.to(
            backPoint,
            1.5,
            {
                alpha: .95,
                x: 725,
                ease: "back.out(1.7)",
                onUpdate: drawBackEnd,
                onComplete: () => {
                    allowWheelUp = true
                    allowWheelDown = true
                }
            }
        )
    }

    //----------------------------------------------------------
    const animateBackEndRew = () => {
        TweenMax.to(
            backPoint,
            1.5,
            {
                alpha: 0,
                x: 1800,
                ease: "back.out(1.7)",
                onUpdate: drawBackEnd,
                onComplete: () => {
                    backPoint = {x:1000, y:320, alpha: 0}
                    backAnimRunning = false
                    allowWheelUp = true
                    allowWheelDown = true
                }
            }
        )
    }

    //----------------------------------------------------------
    const drawBackEnd = () => {

        const ctx = heroCanvas.current.getContext('2d')

        // Draws last loaded Image
        ctx.drawImage(image, 0, 0)

        // Draws Text
        ctx.save()
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 3;
            ctx.shadowColor = "#000000"
            ctx.fillStyle = '#cc8e35';
            ctx.globalAlpha = backPoint.alpha

            canvasTxt.align = 'left'
            canvasTxt.font='Oxygen Bold';
            canvasTxt.fontSize = 36
            canvasTxt.drawText(
                ctx,
                'BackEnd',
                backPoint.x,
                backPoint.y -265,
                600,
                600
            )

            canvasTxt.fontSize =  18
            canvasTxt.lineHeight = 24
            ctx.fillStyle = '#eeeeee';
            ctx.font=18+'px '+'Oxygen Bold';

            canvasTxt.drawText(
                ctx,
                "A Web application not only needs to be beautiful,\n" +
                "responsive and interactive, but it often needs to adress\n"+
                "thousands of requests per minute, be secure and fault\n" +
                "tolerant, it should scale as the user base grows and.\n" +
                "provide infrastructure for logging and diagnostics, as\n" +
                "well for managing async tasks with queues for more\n" +
                "complex workflows and improved read/write database access.\n\n" +

                "The ability to deploy in the cloud to AWS, Azure and\n" +
                "Google Cloud are key these days key for the success of\n" +
                "any full stack developer. Back end is not what you see,\n" +
                "but if it fails you surely know that the business won't\n" +
                "be right.",
                backPoint.x,
                backPoint.y -70,
                600,
                600
            )
        ctx.restore()
    }

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
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="hero"
                role="banner"
                className="hero"
                onWheel={(e) => heroCanvas_onWheel(e)}
                onFocus={()  => heroCanvas_onMouseEnter()}
        >
            <canvas ref={heroCanvas}
                    className="hero"
                    onWheel={(e) => heroCanvas_onWheel(e)}
            >
            </canvas>
            <div className="scroll-indicator">
                <ScrollDown/>
            </div>


        </section>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default HeroSection
