//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import * as THREE               from "three"
import { useEffect }            from "react"
import { useRef }               from "react"
import { useFrame }             from '@react-three/fiber'
import { PerspectiveCamera }    from '@react-three/drei'
import { useSphere }            from '@react-three/cannon'

import { usePlayerControls }    from './hooks/usePlayerControls'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
function Camera(props)
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    // Refs
    const thisCamera     = useRef()
    const meshRef        = useRef()
    const velocity       = useRef([0, 0, 0])
    const SPEED          = 150

    // Vars
    let action           = undefined
    let move             = undefined

    // Consts
    const speed          = new THREE.Vector3()
    const direction      = new THREE.Vector3()
    const frontVector    = new THREE.Vector3()
    const sideVector     = new THREE.Vector3()

    const {
        forward,
        backward,
        left,
        right,
        jump
    } = usePlayerControls()


    //----------------------------------------------------------
    // Physics Initialization Section
    //----------------------------------------------------------
    const [wrapperRef, api] = useSphere(() => ({
        type        : 'Dynamic',
        mass        : 1,
        args        : 40,
        position    : [0,174,900]
    }))


    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

        if (api)
        {
            api.position.set(0, 174, 900)
            thisCamera.current.position.set(0, 174, 900)

            api.velocity.subscribe(
                (v) => (velocity.current = v)
            )
        }

    }, [])


    //----------------------------------------------------------
    // Update Frame Section
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
        if (!move)
        {
            move = {
                forward : 0,
                turn    : 0
            }
        }

        wrapperRef.current.getWorldPosition(
            thisCamera.current.position
        )

        props.onDebug({
             dataLabel: 'Rotation Y',
             dataValue: delta
        })

        frontVector.set(0, 0, -move.forward || (Number(backward) - Number(forward)))
        sideVector.set(move.turn || (Number(left) - Number(right)), 0, 0)

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(
                thisCamera.current.rotation
            )

        speed.fromArray(velocity.current)

        api.velocity.set(
            direction.x,
            velocity.current[1],
            direction.z
        )

        thisCamera.current.rotateY(
            (move.turn * delta)
        )
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
        <PerspectiveCamera
            makeDefault
            ref={thisCamera}
        >
        </PerspectiveCamera>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Camera
