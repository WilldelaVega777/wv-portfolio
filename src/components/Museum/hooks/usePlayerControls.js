//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import { useState }             from "react"
import { useEffect }            from "react"


//--------------------------------------------------------------
// Global Initialization Section
//--------------------------------------------------------------
const keys = {
    ArrowUp         : "forward",
    ArrowDown       : "backward",
    ArrowLeft       : "left",
    ArrowRight      : "right",
    Space           : "jump",
    Alt             : "alt",
    Meta            : "meta"
}

const moveFieldByKey = (key) => keys[key]


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
export const usePlayerControls = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
        alt: false,
        meta: false
    })


    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {
        const handleKeyDown = (e) => setMovement((m) =>
            ({ ...m, alt:e.altKey, meta:e.metaKey, [moveFieldByKey(e.code)]: true }))

        const handleKeyUp = (e) => setMovement(
            (m) => (
                {
                    ...m,
                    alt:e.altKey,
                    meta: e.metaKey,
                    [moveFieldByKey(e.code)]: false
                }
            )
        )

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [])


    //----------------------------------------------------------
    // Hook Returns
    //----------------------------------------------------------
    return movement

}
