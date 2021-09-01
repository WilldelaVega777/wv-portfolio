/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Musée Saint-Raymond (https://sketchfab.com/museesaintraymond)
license: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
source: https://sketchfab.com/3d-models/buste-cuirasse-de-marc-aurele-age-a7e0a77f81f74c80b15ba64164e14c03
title: Buste cuirassé de Marc Aurèle âgé
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-261.75, -206.63, -760.03]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_6.geometry} material={materials.defaultMat_0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')