//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useEffect }                    from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'
import { useAnimations }                from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Bystander = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials, animations } =
        useGLTF('/models/Museum/bystander/Bystander.glb')

    const { actions } = useAnimations(animations, group)


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

        actions.Idle.play()

    }, [])

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            position={[-590,0,-80]}
            rotation={[0,(-Math.PI /2),0]}
        >
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <primitive object={nodes.mixamorig7Hips} />
                <skinnedMesh
                    geometry={nodes.Ch33_Belt.geometry}
                    material={nodes.Ch33_Belt.material}
                    skeleton={nodes.Ch33_Belt.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Body.geometry}
                    material={nodes.Ch33_Body.material}
                    skeleton={nodes.Ch33_Body.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Eyelashes.geometry}
                    material={nodes.Ch33_Eyelashes.material}
                    skeleton={nodes.Ch33_Eyelashes.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Hair.geometry}
                    material={nodes.Ch33_Hair.material}
                    skeleton={nodes.Ch33_Hair.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Pants.geometry}
                    material={nodes.Ch33_Pants.material}
                    skeleton={nodes.Ch33_Pants.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Shirt.geometry}
                    material={nodes.Ch33_Shirt.material}
                    skeleton={nodes.Ch33_Shirt.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Shoes.geometry}
                    material={nodes.Ch33_Shoes.material}
                    skeleton={nodes.Ch33_Shoes.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Suit.geometry}
                    material={nodes.Ch33_Suit.material}
                    skeleton={nodes.Ch33_Suit.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Ch33_Tie.geometry}
                    material={nodes.Ch33_Tie.material}
                    skeleton={nodes.Ch33_Tie.skeleton}
                />
            </group>
      </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/Bystander/bystander.glb'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Bystander


