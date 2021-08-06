//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import { useEffect }            from "react"
import { useRef }               from "react"
import { useFrame }             from '@react-three/fiber'
import { PerspectiveCamera }    from '@react-three/drei'
import { useBox }               from '@react-three/cannon'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
function Camera(props)
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const [ref, api] = useBox(() => ({
        type        : 'Kinematic',
        args        : [60,60,60],
        position    : [0,100,0]
    }))
    const thisCamera = useRef()
    const wrapperRef = useRef()
    let action = undefined
    let move = undefined
    let myZ = 0

    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {
        if (thisCamera?.current)
        {
            thisCamera.current.position.y = 174
            thisCamera.current.position.z = 900
        }
    }, [])


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

            if (move.forward > 0)
            {
                const speed = (action === 'Running') ? 400 : 150
                void api.position.set(
                        thisCamera.current.position.x,
                        thisCamera.current.position.y,
                        thisCamera.current.position.z
                    )
            }
            else
            {
                void api.position.set(
                    thisCamera.current.position.x,
                    thisCamera.current.position.y,
                    thisCamera.current.position.z
                )
            }

            void api.rotation.set(
                thisCamera.current.rotation.x,
                thisCamera.current.rotation.y,
                thisCamera.current.rotation.z
            )
        }


    }


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
    // Render Section
    //----------------------------------------------------------
    return (
        <React.Fragment>
            <PerspectiveCamera
                ref={thisCamera}
                {...props}
                makeDefault
            />


            <mesh ref={ref}>
                <boxBufferGeometry
                    attach="geometry"
                    args={[60,60,60]}
                />
                <meshStandardMaterial
                    color='pink'
                    opacity={0.5}
                    transparent
                />
            </mesh>
        </React.Fragment>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Camera
