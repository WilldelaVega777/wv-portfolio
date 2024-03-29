/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/angular.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-1.37, 0.16, 0]}
        rotation={[1.56, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/angular.glb')
