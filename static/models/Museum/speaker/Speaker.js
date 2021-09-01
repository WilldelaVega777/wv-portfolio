/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/speaker.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[-0.01, 1.75, -1.24]}
        rotation={[0, 0.21, 0]}
        scale={[1, 1.57, 1]}
      />
    </group>
  )
}

useGLTF.preload('/speaker.glb')
