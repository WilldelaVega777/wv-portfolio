//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useRef }           from 'react'
import { useGLTF }          from '@react-three/drei'
import PictureReflector     from './PictureReflector'

//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const WhiteFrame = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes, materials } =
        useGLTF('/models/Museum/frames/white_frame.gltf')


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={group} {...props} dispose={null}>
            <PictureReflector
                position={[0,50.5,0]}
                scale={1.8,1.8,1.8}
            />
            <group position={[-0.19, -0.35, -1.23]} rotation={[0, 0, -2.36]}>
                {/* External Frame */}
                <mesh
                    geometry={nodes.Mesh001.geometry}
                    material={materials['framewhite.001']}
                    material-color={props.externalColor}
                />

                {/* Internal Frame */}
                <mesh
                    geometry={nodes.Mesh001_1.geometry}
                    material={materials['frame2.001']}
                    material-color={props.internalColor}
                />

                {/* Diploma Content */}
                <mesh rotation={[0,0,(Math.PI * .75)]}>
                    <boxBufferGeometry args={[89.7,59,1]}/>
                    <meshStandardMaterial
                        map={props.content}
                        attach="material"
                    />
                </mesh>

            </group>
      </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload('/models/Museum/frames/white_frame.gltf')


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default WhiteFrame
