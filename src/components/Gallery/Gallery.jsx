//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useEffect }        from "react"
import { Suspense }         from "react"
import "./Gallery.scss"

import { Canvas }           from "@react-three/fiber"
import { Text }             from "@react-three/drei"
import { useLoader }        from '@react-three/fiber'
import { GLTFLoader }        from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls }    from "@react-three/drei"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Gallery = () => {
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    let gallery = useLoader(GLTFLoader, '/models/Gallery.gltf')


    //----------------------------------------------------------
    // Life Cycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Suspense fallback={
            <Canvas>
                <Text color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    Loading...
                </Text>
            </Canvas>
        }>
            <Canvas>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}
                            intensity={0.1}
                />

                <primitive object={gallery.scene}
                           position={[80, -80, 0]}
                />


                <OrbitControls enablePan={true}
                               enableZoom={true}
                               enableRotate={true}
                               autoRotate={false}
                />
            </Canvas>
        </Suspense>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Gallery
