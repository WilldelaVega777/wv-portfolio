//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useRef }           from 'react'
import { useFrame }         from '@react-three/fiber'
import { useTexture }       from '@react-three/drei'



//--------------------------------------------------------------
// Components Section
//--------------------------------------------------------------
const Item = (props) => {

    //----------------------------------------------------------
    // Component Functions Section
    //----------------------------------------------------------
    const getPosition = (yPosition) => {
        return [
            Math.cos(props.angle) * getRadius(),
            yPosition,
            Math.sin(props.angle) * getRadius()
        ]
    }

    //----------------------------------------------------------
    const getRotation = () => [
        0,
        (props.angle * -1) + (Math.PI / 2),
        0
    ]

    //----------------------------------------------------------
    const getRadius = () => {
        baseRadius = (baseRadius - decrement)
        return baseRadius
    }


    //----------------------------------------------------------
    // Internal Variables Section
    //----------------------------------------------------------
    const o2i1aMesh = useRef()
    const o2i1bMesh = useRef()
    const o2i2aMesh = useRef()
    const o2i2bMesh = useRef()

    const [
        colorMap1a,
        colorMap1b,
        colorMap2a,
        colorMap2b
    ] = useTexture(
        [
            props.item.src,
            props.item.text,
            props.item.iSrc,
            props.item.iText
        ]
    )


    let baseRadius  = 2.4
    let decrement   = 0.002
    let rt          = getRotation()

    let o2i0Pos     = getPosition((props.floor +0.89))
    let o2i1Pos     = getPosition((props.floor +0.32))
    let o2i2Pos     = getPosition((props.floor +0.32))
    let o2i3Pos     = getPosition((props.floor +0.89))


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
            if (o2i1aMesh.current.position.y <= .38)
            {
                o2i1aMesh.current.position.y += 0.05
                o2i2bMesh.current.position.y += 0.05
            }
        }
        //------------------------------------------------------
        const unhover = () => {
            if (o2i1aMesh.current.position.y > -0.19)
            {
                o2i1aMesh.current.position.y -= 0.05
                o2i2bMesh.current.position.y -= 0.05
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
                ref={o2i1aMesh}
                position={o2i0Pos}
                rotation={rt}
                onPointerOver={(event) => itemOnPointerOver(event)}
            >
                <boxGeometry args={[1.8, 1.0, .01]} />
                <meshStandardMaterial color={'#b3b3b3'}
                                      map={colorMap1a}
                />
            </mesh>
            <mesh
                ref={o2i1bMesh}
                position={o2i1Pos}
                rotation={rt}
            >
                <boxGeometry args={[1.8, .63, .01]}/>
                <meshStandardMaterial color={'#bbb'}
                                      map={colorMap1b}
                />
            </mesh>
            <mesh
                ref={o2i2aMesh}
                position={o2i2Pos}
                rotation={rt}
            >
                <boxGeometry args={[1.8, .63, .01]}/>
                <meshStandardMaterial color={'#777'}
                                      map={colorMap2b}
                />
            </mesh>
            <mesh
                ref={o2i2bMesh}
                position={o2i3Pos}
                rotation={rt}
            >
                <boxGeometry args={[1.8, 1.0, .01]}/>
                <meshStandardMaterial color={'#575757'}
                                      map={colorMap2a}
                />
            </mesh>
        </group>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Item
