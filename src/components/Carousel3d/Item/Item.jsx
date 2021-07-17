//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
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
    const reversedMesh              = useRef()
    const [colorMap, colorLabel]    = useLoader(
        TextureLoader,
        [
            props.item.src,
            props.item.text
        ]
    )


    let innerRadius
    let innerPosition
    let innerRotation

    let outerRadius
    let outerPosition
    let outerRotation

    let innerReversedRadius
    let innerReversedPosition
    let innerReversedRotation


    //----------------------------------------------------------
    // Initialize Variables Section
    //----------------------------------------------------------
    outerRadius         = 2.4
    innerRadius         = 2.396
    innerReversedRadius = 2.392

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

    innerReversedPosition= [
        Math.cos(props.angle) * innerReversedRadius,
        0,
        Math.sin(props.angle) * innerReversedRadius
    ]

    innerReversedRotation= [
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
            if (currentMesh.current.position.y <= .38)
            {
                currentMesh.current.position.y += 0.05
                reversedMesh.current.position.y += 0.05
            }
        }
        //------------------------------------------------------
        const unhover = () => {
            if (currentMesh.current.position.y > -0.19)
            {
                currentMesh.current.position.y -= 0.05
                reversedMesh.current.position.y -= 0.05
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
                <boxGeometry args={[1.8, 1.0, .01]} />
                <meshStandardMaterial color={'#888'}
                                      map={colorMap}
                />
            </mesh>
            <mesh
                position={innerPosition}
                rotation={innerRotation}
            >
                <boxGeometry args={[1.8, .63, .01]}/>
                <meshStandardMaterial color={'#aaaaaa'}
                                      map={colorLabel}
                />
            </mesh>
            <mesh
                ref={reversedMesh}
                position={innerReversedPosition}
                rotation={innerReversedRotation}
            >
                <boxGeometry args={[1.8, 1.0, .01]}/>
                <meshStandardMaterial color={'orange'}
                />
            </mesh>
        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Item
