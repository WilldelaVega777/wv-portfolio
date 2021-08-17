//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import * as THREE               from 'three'
import { useMemo  }             from 'react'
import { useRef }               from 'react'
import { useLayoutEffect }      from 'react'
import { useLoader }            from '@react-three/fiber'
import roboto from '../../assets/fonts/Roboto/Roboto.json'

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Text = ({
    children,
    vAlign = 'center',
    hAlign = 'center',
    size = 20,
    color = 'gray',
    ...props
}) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const font = new THREE.FontLoader().parse(roboto)
    //const font = useLoader(THREE.FontLoader, '../../assets/fonts/Roboto/Roboto.json')

    const config = useMemo(
      () => ({
            font,
            size: 40,
            height: 1,
            curveSegments: 32,
            bevelEnabled: true,
            zbevelThickness: 6,
            bevelSize: 2.5,
            bevelOffset: 0,
            bevelSegments: 8
        }),
      [font]
    )

    const mesh = useRef()


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            {...props}
        >
            <mesh ref={mesh}>
                <textGeometry args={[children, config]} />
                <meshStandardMaterial />
            </mesh>

        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Text

