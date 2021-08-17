//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import Sign                     from './Sign'
import Text                     from './Text'
import MeshSign              from './MeshSign'
import { useRef }               from 'react'
import { useFrame }             from '@react-three/fiber'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Signs = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const ref = useRef()

    //useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={ref}>

            {/* Thanks for Visiting */}
            <MeshSign
                position={[-140,200,-1029]}
                color='white'
                file='angular'
            />

            {/* Databases */}
            <MeshSign
                position={[245,10,690]}
                color='white'
                file='angular'
            />

            {/* Angular */}
            <MeshSign
                position={[245,10,132.5]}
                color='white'
                file='angular'
            />

            {/* React */}
            <MeshSign
                position={[245,10,-413]}
                color='white'
                file='angular'
            />

        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Signs

