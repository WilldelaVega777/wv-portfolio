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
    //useFrame((state, delta) => (currentMesh.current.rotation.x += 0.01))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <mesh
            {...props}
            ref={currentMesh}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1.6, 1, .01]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Item
