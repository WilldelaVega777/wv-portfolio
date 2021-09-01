/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Gallery.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-12.43, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.floor_Floor_Satin_0.geometry}
              material={materials.Floor_Satin}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.floor_Grassblade_0.geometry}
              material={materials.Grassblade}
            />
            <mesh castShadow receiveShadow geometry={nodes.floor_Plaster_0.geometry} material={materials.Plaster} />
            <mesh castShadow receiveShadow geometry={nodes.floor_Soil_0.geometry} material={materials.Soil} />
          </group>
          <group position={[181.47, 75.42, 100.72]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.glass_glass_0.geometry} material={materials.glass} />
          </group>
          <group position={[-61.39, 64.08, -105.73]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.paintings_A_0.geometry} material={materials.material} />
            <mesh castShadow receiveShadow geometry={nodes.paintings_C_0.geometry} material={materials.material_11} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.paintings_Carpet_Soft_Rug_Dark_Grey_Pattern_2_0.geometry}
              material={materials.Carpet_Soft_Rug_Dark_Grey_Pattern_2}
            />
            <mesh castShadow receiveShadow geometry={nodes.paintings_D_0.geometry} material={materials.material_14} />
            <mesh castShadow receiveShadow geometry={nodes.paintings_E_0.geometry} material={materials.material_15} />
            <mesh castShadow receiveShadow geometry={nodes.paintings_F_0.geometry} material={materials.material_13} />
            <mesh castShadow receiveShadow geometry={nodes.paintings_floor_0.geometry} material={materials.floor} />
            <mesh castShadow receiveShadow geometry={nodes.paintings_G_0.geometry} material={materials.material_12} />
          </group>
          <group position={[-24.52, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.stairs_stairs_0.geometry} material={materials.stairs} />
          </group>
          <group position={[184.42, 149.86, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.steel_Acrylic_Black_0.geometry}
              material={materials.Acrylic_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.steel_Aluminium_Black_0.geometry}
              material={materials.Aluminium_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.steel_Chrome_Clean_0.geometry}
              material={materials.Chrome_Clean}
            />
            <mesh castShadow receiveShadow geometry={nodes.steel_light_0.geometry} material={materials.light} />
          </group>
          <group position={[-20.35, 0, 13.07]} rotation={[0, -1.22, 0]} scale={0.39}>
            <mesh castShadow receiveShadow geometry={nodes.tree_tree_b_0.geometry} material={materials.tree_b} />
          </group>
          <group position={[-12.43, 0, 12.38]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.walls_walls_0.geometry} material={materials.walls} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Gallery.gltf')
