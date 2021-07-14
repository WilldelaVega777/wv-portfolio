//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { useRef }           from 'react'
import { useFrame }         from '@react-three/fiber'


//--------------------------------------------------------------
// Components Section
//--------------------------------------------------------------
const Item = (props) => {

    //----------------------------------------------------------
    // Internal Variables Section
    //----------------------------------------------------------
    const currentMesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    useFrame((state, delta) => {
        if (hovered && currentMesh.current.position.y <= .8)
        {
            (currentMesh.current.position.y += 0.05)
        }
        else if (!hovered && currentMesh.current.position.y > 0)
        {
            (currentMesh.current.position.y -= 0.05)
        }
    })

    //----------------------------------------------------------
    const itemOnPointerOver = (event) => {
        setHover(true)
    }

    //----------------------------------------------------------
    const itemOnPointerOut = (event) => {
        setHover(false)
    }

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh
            {...props}
            ref={currentMesh}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => itemOnPointerOver(event)}
            onPointerOut={(event) => itemOnPointerOut(event)}
        >
            <boxGeometry args={[2.6, 1.5, .01]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Item
