//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useGLTF }                      from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Coin = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/coin/scene.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[0, 16.46, -16.26]} rotation={[1.56, 0, 0]}>
                    <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={materials.material_0} />
                </group>
            </group>
        </group>
    )


    //----------------------------------------------------------
    // Preload GLTF
    //----------------------------------------------------------
    useGLTF.preload(
        '/models/Museum/coin/scene.gltf'
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Coin


