//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react';
import Diploma                          from "./Diploma"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Frames = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------



    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            {/* Databases */}
            <Diploma
                position={[-220,207.5,447.5]}
                externalColor="#3e2e23"
                internalColor="#3e2e23"
                image="/images/Diplomas/Databases/SQLAnalyst.jpg"
                type={1}
            />

            {/* Angular */}
            <Diploma
                position={[250,205,132.5]}
                externalColor="#3e2e23"
                internalColor="#3e2e23"
                image="/images/Diplomas/Angular/angular_career.jpg"
                type={2}
            />

            <Diploma
                position={[400,205,132.5]}
                externalColor="#3e2e23"
                internalColor="#3e2e23"
                image="/images/Diplomas/Angular/angular-avanzado.jpg"
                type={2}
            />

            <Diploma
                position={[250,90,132.5]}
                externalColor="#3e2e23"
                internalColor="#3e2e23"
                image="/images/Diplomas/Angular/angular.jpg"
                type={2}
            />

            <Diploma
                position={[400,90,132.5]}
                externalColor="#3e2e23"
                internalColor="#3e2e23"
                image="/images/Diplomas/Angular/mean.jpg"
                type={2}
            />

        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Frames
