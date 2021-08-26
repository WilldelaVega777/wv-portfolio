//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                            from 'react'
import { useRef }                       from 'react'
import { useFrame }                     from '@react-three/fiber'
import { useGLTF }                      from '@react-three/drei'
import { Html }                         from '@react-three/drei'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Techichi = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const group = useRef()

    const { nodes } =
        useGLTF('/models/Museum/techichi/scene.gltf')

    //----------------------------------------------------------
    // Animation Section
    //----------------------------------------------------------
    useFrame(({clock}) => {
        if (props.rotate)
        {
            const eT = clock.getElapsedTime()

            group.current.rotation.set(0,eT,0)
        }
    })


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={[25,25,25]}
        >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <group
                    rotation={[-0.21, -0.15, 0.47]}
                >
                    <group
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial.geometry}
                            material={nodes.defaultMaterial.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={nodes.defaultMaterial_1.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_2.geometry}
                            material={nodes.defaultMaterial_2.material}
                        />
                    </group>
                </group>
            </group>
            { props.rotate &&
                <Html>
                    <div style={{
                        fontSize:16 + 'px',
                        color: 'white',
                        fontFamily: 'Helvetica',
                        fontWeight: 'bold',
                        minWidth: 300 + 'px',
                        marginLeft: -100 + 'px',
                        marginTop: 150 + 'px',
                        textAlign: 'center',
                        lineHeight: 1.4
                    }}>
                        Please wait while it loads<br/>
                        Don't Leave or I'll bite you!<br/>
                        This is the Beta 1 of the site...
                    </div>
                </Html>
            }
        </group>
    )
}


//--------------------------------------------------------------
// Preload GLTF
//--------------------------------------------------------------
useGLTF.preload(
    '/models/Museum/techichi/scene.gltf'
)


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Techichi
