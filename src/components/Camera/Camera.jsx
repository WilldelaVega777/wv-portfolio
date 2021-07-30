//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useRef }               from "react"
import { useFrame }             from '@react-three/fiber'
import { PerspectiveCamera }    from '@react-three/drei'
import { Text }                 from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
function Camera(props)
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const thisCamera = useRef()
    let action = undefined
    let move = undefined


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    useFrame((state, delta) => {

        if (props.XY)
        {
            playerUpdate(props.XY.y, props.XY.x)
            movePlayer(delta)
        }

    })


    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const playerUpdate = (forward, turn) =>
    {
        turn    = -turn

        if (forward > 0.3)
        {
            if (action !== 'Walking' && action !== 'Running')
            {
                action = 'Walking'
            }
        }
        else if (forward < -0.3)
        {
            if (action !== 'Walking Backwards')
            {
                action = 'Walking Backwards'
            }
        }
        else
        {
            forward = 0
            if (Math.abs(turn) > 0.1)
            {
                if (action !== 'Turn')
                {
                    action = 'Turn'
                }
            }
            else if (action !== 'Idle')
            {
                action = 'Idle'
            }
        }

        if (forward === 0 && turn === 0)
        {
            move = undefined
        }
        else
        {
            move = { forward , turn }
        }
    }

    //----------------------------------------------------------
    const movePlayer = (delta) =>
    {
        if (move)
        {
            if (move.forward > 0)
            {
                const speed = (action === 'Running') ? 400 : 150
                thisCamera.current.translateZ(-delta * speed)
            }
            else
            {
                thisCamera.current.translateZ(delta * 30)
            }

            thisCamera.current.rotateY(move.turn * delta)
        }
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <React.Fragment>
            <PerspectiveCamera
                ref={thisCamera}
                {...props}
                makeDefault
            />
            <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                size={'large'}
            >
                {thisCamera?.current?.rotation?.x}
            </Text>
        </React.Fragment>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Camera
