//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from "react";
import { useState }         from "react"


//--------------------------------------------------------------
// Context Definition Section
//--------------------------------------------------------------
const PageContext = React.createContext({
    scroll : false,
    toggleScroll: () => {
        console.log('There is not a matching provider!')
    }
})


//--------------------------------------------------------------
// Provider Component Section
//--------------------------------------------------------------
export const PageProvider = (props) => {

    //----------------------------------------------------------
    // Initial State Section
    //----------------------------------------------------------
    const [scroll, setScroll] = useState(false)
    const [fixTop, setFixTop] = useState(0)


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
    // Render Section
    //----------------------------------------------------------
    return (
        <PageContext.Provider value={{
            scroll: scroll,
            toggleScroll: toggleScroll,
            fixTop: fixTop,
            updateFixTop: updateFixTop
        }}>
            {props.children}
        </PageContext.Provider>

    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PageContext;
