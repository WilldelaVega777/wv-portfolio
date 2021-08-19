//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                    from 'react'
import MeshSign              from './MeshSign'
import { useRef }               from 'react'


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Signs = (props) =>
{
    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const ref = useRef()


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <group ref={ref}>

            {/* Databases */}
            <MeshSign
                position={[500,10,730]}
                rotation={[0,(-Math.PI/2),0]}
                color='white'
                backAlign={1}
                file='databases'
            />

            {/* Angular */}
            <MeshSign
                position={[245,10,132.5]}
                color='white'
                backAlign={1}
                file='angular'
            />

            {/* Angular */}
            <MeshSign
                position={[245,10,662.5]}
                rotation={[0, (Math.PI), 0]}
                color='white'
                backAlign={-1.6}
                file='angular'
            />

            {/* React */}
            <MeshSign
                position={[245,10,-413]}
                color='white'
                backAlign={1}
                file='react'
            />

            {/* React */}
            <MeshSign
                position={[225,10,112.5]}
                rotation={[0, (Math.PI), 0]}
                color='white'
                backAlign={-1.6}
                file='react'
            />

            {/* DevOps */}
            <MeshSign
                position={[-202.5,10,705]}
                rotation={[0, (Math.PI), 0]}
                color='white'
                backAlign={1}
                file='devops'
            />

            <MeshSign
                position={[-190,10,725]}
                color='white'
                backAlign={-1.6}
                file='devops'
            />

            <MeshSign
                position={[-162, 10, 445]}
                color='white'
                backAlign={-2.08}
                file='java'
            />

            <MeshSign
                position={[-700,10,950]}
                rotation={[0, (Math.PI / 2), 0]}
                color='white'
                file='ionic'
            />

            <MeshSign
                position={[-200, 10, -371]}
                color='white'
                file='net'
                backAlign={-0.68}
            />

            <MeshSign
                position={[-192,10,412]}
                rotation={[0, (Math.PI), 0]}
                color='white'
                backAlign={1}
                file='node'
            />

            <MeshSign
                position={[-700,10,-455]}
                rotation={[0, (Math.PI / 2), 0]}
                color='white'
                file='soft_skills'
            />

        </group>
    )
}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Signs

