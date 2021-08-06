import * as React from 'react'
import { useBox } from '@react-three/cannon'

export const Cubito = (props) => {

    const [ref] = useBox(() => (
        {
            mass: 1,
            args: [40,40,40],
            position: [0, 225, 0],
            ...props
        }
    ))

    return (
      <mesh ref={ref}>
        <sphereBufferGeometry/>
      </mesh>
    )

}

