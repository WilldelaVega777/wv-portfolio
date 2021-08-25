//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React               from "react"
import * as THREE               from "three"
import { useEffect }            from "react"
import { useRef }               from "react"
import { forwardRef }           from "react"
import { useImperativeHandle }  from "react"
import { useFrame }             from '@react-three/fiber'
import { PerspectiveCamera }    from '@react-three/drei'
import { useSphere }            from '@react-three/cannon'
import { usePlayerControls }    from './hooks/usePlayerControls'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Camera = forwardRef((props, ref) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    // Refs
    const thisCamera     = useRef()
    const velocity       = useRef([0, 0, 0])
    const SPEED          = 150

    // Vars
    let turnDirection    = false
    let currentRotation  = 0


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
        alt
    } = usePlayerControls()

    let XY = {}


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
            api.position.set(0, 380, 900)
            thisCamera.current.position.set(0, 380, 900)

            api.velocity.subscribe(
                (v) => (velocity.current = v)
            )
        }

    }, [])

    //----------------------------------------------------------
    // Ref Component Extension Section
    //----------------------------------------------------------
    useImperativeHandle(ref, (data) => ({

        setCoordinates(data)
        {
            XY = data
        },

        quickTurn(direction)
        {
            console.log((direction===1) ? 'left': 'right')
            turnDirection = direction
        }

    }))


    //----------------------------------------------------------
    // Update Frame Section
    //----------------------------------------------------------
    useFrame((state, delta) => {

        const move = {
            forward: ((XY.y) ? (XY.y) : 0),
            turn: ((XY.x) ? (-XY.x) : 0)
        }
        movePlayer(delta, move)

    })


    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const movePlayer = (delta, move) =>
    {

        wrapperRef.current.getWorldPosition(
            thisCamera.current.position
        )


        if (alt && left)
        {
            move = {
                forward: 0,
                backward: 0,
                turn: 1
            }
            thisCamera.current.rotateY(
                (move.turn * (delta * 4))
            )
        }
        else if (alt && right)
        {
            move = {
                forward: 0,
                backward: 0,
                turn: -1
            }
            thisCamera.current.rotateY(
                (move.turn * (delta * 4))
            )
        }
        else
        {
            if (turnDirection === 1)
            {
                move = {
                    forward: 0,
                    backward: 0,
                    turn: 1
                }
                thisCamera.current.rotateY(
                    (move.turn * (delta * 8))
                )

                currentRotation += (move.turn * (delta * 8))

                if (currentRotation >=  (Math.PI / 2))
                {
                    currentRotation = 0
                    turnDirection = 0
                }
            }
            else if (turnDirection === -1)
            {
                move = {
                    forward: 0,
                    backward: 0,
                    turn: -1
                }
                thisCamera.current.rotateY(
                    (move.turn * (delta * 8))
                )

                currentRotation += (move.turn * (delta * 8))

                if (currentRotation <= (-Math.PI / 2))
                {
                    currentRotation = 0
                    turnDirection = 0
                }
            }
            else
            {
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

                if ((alt && left) || (alt && right))
                {
                    api.velocity.set(
                        (direction.x * 4.5),
                        velocity.current[1],
                        (direction.z * 4.5)
                    )
                }
                else
                {
                    api.velocity.set(
                        (direction.x * 1.5),
                        velocity.current[1],
                        (direction.z * 1.5)
                    )
                }

                thisCamera.current.rotateY(
                    (move.turn * delta)
                )
            }
        }
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <PerspectiveCamera

            makeDefault
            ref={thisCamera}
            far={2500}
        />
    )
})


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Camera
