//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useState }         from "react"
import { useEffect }    from 'react'
import { useRef }       from 'react'
import { gsap }         from 'gsap'

import Title            from "../../components/Resume/components/Title"
import { Suspense }         from "react"

import DialogTitle          from '@material-ui/core/DialogTitle';
import Dialog               from '@material-ui/core/Dialog';

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import YouTube              from 'react-youtube';

import Carousel3d           from "../../components/Carousel3d/Carousel3d.jsx"

import "./PortfolioSection.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PortfolioSection = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const isBrowser = (typeof window !== "undefined")

    const [open, setOpen]           = useState(false)
    const [videoUrl, setVideoUrl]   = useState('')

    const darkTheme = createTheme({
        palette: {
          type: 'dark',
        },
    })

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
    const openDialog = (videoUrl) => {
        setOpen(true)
        setVideoUrl(videoUrl)
    }

    //----------------------------------------------------------
    // Props Eventhandler Section
    //----------------------------------------------------------
    const itemSelected = (item) => {
        openDialog(item.videoUrl)
    }

    //----------------------------------------------------------
    const handleClose = () => {
        setOpen(false)
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
            iText: getITextName(1),
            videoUrl: 'nJWZCuDXdPc'
        },
        {
            id: 1,
            src: getImageName(2),
            text: getTextName(2),
            iSrc: getIImageName(2),
            iText: getITextName(2),
            videoUrl: 'KlulUF9qRNM'
        },
        {
            id: 2,
            src: getImageName(3),
            text: getTextName(3),
            iSrc: getIImageName(3),
            iText: getITextName(3),
            videoUrl: 'ZmGA2cTOH7s'
        },
        {
            id: 3,
            src: getImageName(4),
            text: getTextName(4),
            iSrc: getIImageName(4),
            iText: getITextName(4),
            videoUrl: 'vLEYexCW2-Q'
        },
        {
            id: 4,
            src: getImageName(5),
            text: getTextName(5),
            iSrc: getIImageName(5),
            iText: getITextName(5),
            videoUrl: 'Uv4hCbB46cU'
        },
        {
            id: 5,
            src: getImageName(6),
            text: getTextName(6),
            iSrc: getIImageName(6),
            iText: getITextName(6),
            videoUrl: 'iDH8GC4cl4o'
        },
        {
            id: 6,
            src: getImageName(7),
            text: getTextName(7),
            iSrc: getIImageName(7),
            iText: getITextName(7),
            videoUrl: 'ugpDgdVNoGQ'
        },
        {
            id: 7,
            src: getImageName(8),
            text: getTextName(8),
            iSrc: getIImageName(8),
            iText: getITextName(8),
            videoUrl: 'lmumPN7yNI0'
        }
    ]


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section id="portfolio"
                 className="portfolio"
        >
            {/* Dialog */}
            <ThemeProvider theme={darkTheme}>
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="simple-dialog-title"
                    open={open}
                    fullWidth={true}
                    maxWidth='md'
                >
                    <DialogTitle
                        id="simple-dialog-title"
                    >
                        Project Video
                    </DialogTitle>
                    <YouTube
                        videoId={videoUrl}
                    />

                </Dialog>
            </ThemeProvider>

            {/* Title */}
            <div className="portfolio-container scroll">
                <Title
                    title={'Projects'}
                    span={''}
                />

                {/* Description */}
                <article>
                    Here are some of my projects. Many of them I
                    could not put in here due to NDA’s signed with
                    some clients that are startups and required me
                    not to disclose information regarding their
                    product, however these projects will give you
                    an idea about the kind of work I do. Please
                    click on an image to see a short video of
                    the project in action.
                </article>
            </div>

            {/* 3D Carousel */}
            { isBrowser && (
                <Suspense fallback={null}>
                    <Carousel3d
                        items={items}
                        itemSelected={(item) => itemSelected(item)}
                        className="carousel"
                    />
                </Suspense>
            )}

        </section>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PortfolioSection

