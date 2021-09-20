//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from "react";
import { useState }         from "react"


//--------------------------------------------------------------
// Context Definition Section
//--------------------------------------------------------------
const SiteContext = React.createContext({
    scroll : false,
    toggleScroll: () => {
        console.log('There is not a matching provider!')
    },
    fixTop: 0,
    updateFixTop: () => {},
    activatePresentationLink: false,
    setActivatePresentationLink: () => {},
    requestActivate: false,
    toggleRequestActivate: () => {}
})


//--------------------------------------------------------------
// Provider Component Section
//--------------------------------------------------------------
export const SiteProvider = (props) => {

    //----------------------------------------------------------
    // Initial State Section
    //----------------------------------------------------------
    const [scroll, setScroll] = useState(false)
    const [fixTop, setFixTop] = useState(0)
    const [
        activatePresentationLink,
        setActivatePresentationLink
    ] = useState()
    const [
        requestActivate,
        setRequestActivate
    ] = useState()


    //----------------------------------------------------------
    // Internal Methods Section
    //----------------------------------------------------------
    const toggleScroll = () => {
        if (document.body.style.overflowY === 'hidden')
        {
            setScroll(true)
            document.body.style.overflowY = 'scroll'
        }
        else
        {
            setScroll(false)
            document.body.style.overflowY = 'hidden'
        }
    }

    //----------------------------------------------------------
    const updateFixTop = () => {
        setFixTop(Math.random())
    }

    //----------------------------------------------------------
    const updateActivatePresentationLink = (page) => {
        setActivatePresentationLink(page)
    }

    //----------------------------------------------------------
    const toggleRequestActivate = () => {
        setRequestActivate(!requestActivate)
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <SiteContext.Provider
            value={{
                scroll,
                toggleScroll,
                fixTop,
                updateFixTop,
                activatePresentationLink:activatePresentationLink,
                updateActivatePresentationLink:updateActivatePresentationLink,
                requestActivate,
                toggleRequestActivate:toggleRequestActivate
            }}
        >
            { props.children }
        </SiteContext.Provider>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default SiteContext;
