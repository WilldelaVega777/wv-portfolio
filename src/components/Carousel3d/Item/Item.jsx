//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { useRef }           from 'react'
import { useFrame }         from '@react-three/fiber'
import { useLoader }        from '@react-three/fiber'
import { TextureLoader }    from 'three/src/loaders/TextureLoader'


//--------------------------------------------------------------
// Components Section
//--------------------------------------------------------------
const Item = (props) => {

    //----------------------------------------------------------
    // Internal Variables Section
    //----------------------------------------------------------
    const currentMesh               = useRef()
    const [hovered, setHover]       = useState(false)
    const [colorMap]                = useLoader(TextureLoader, [props.item.src])


    let innerRadius
    let innerPosition
    let innerRotation

    let outerRadius
    let outerPosition
    let outerRotation


    //----------------------------------------------------------
    // Initialize Variables Section
    //----------------------------------------------------------
    outerRadius = 3.5
    innerRadius = 3.496

    outerPosition= [
        Math.cos(props.angle) * outerRadius,
        0,
        Math.sin(props.angle) * outerRadius
    ]

    outerRotation= [
        0,
        (props.angle * -1) + (Math.PI / 2),
        0
    ]


    innerPosition= [
        Math.cos(props.angle) * innerRadius,
        -.40,
        Math.sin(props.angle) * innerRadius
    ]

    innerRotation= [
        0,
        (props.angle * -1) + (Math.PI / 2),
        0
    ]

    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useFrame((state, delta) => {

        //------------------------------------------------------
        // Internal Variables Section
        //------------------------------------------------------
        const isActive = (props.item_IsActive() === props.item.id)


        //------------------------------------------------------
        // Internal Functions Section
        //------------------------------------------------------
        const hover = () => {
            if (currentMesh.current.position.y <= .7)
            {
                (currentMesh.current.position.y += 0.05)
            }
        }
        //------------------------------------------------------
        const unhover = () => {
            if (currentMesh.current.position.y > 0)
            {
                (currentMesh.current.position.y -= 0.05)
            }
        }


        //------------------------------------------------------
        // Loop Logic
        //------------------------------------------------------
        if (isActive)
        {
            hover()
        }
        else
        {
            unhover()
        }

    })

    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const itemOnPointerOver = (event) => {
        setHover(true)
        props.activateItem(props.item.id)
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group>
            <mesh
                ref={currentMesh}
                position={outerPosition}
                rotation={outerRotation}
                onPointerOver={(event) => itemOnPointerOver(event)}
            >
                <boxGeometry args={[2.6, 1.5, .01]} />
                <meshStandardMaterial color={'#888'} map={colorMap}/>
            </mesh>
            <mesh
                position={innerPosition}
                rotation={innerRotation}
            >
                <boxGeometry args={[2.6, .75, .01]}/>
                <meshStandardMaterial color={'#444444'} />
            </mesh>
        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Item
