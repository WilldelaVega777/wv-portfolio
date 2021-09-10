//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React from 'react';
import styled from 'styled-components';


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const ResumeItemStyled = styled.div`
    .content{
        width:100%;
        position:relative;
        padding-left: 20px;
        border-left:8px solid var(--border-color-2);
        padding:1.5rem;
        &::before{
            content:'';
            position:absolute;
            left:-13px;
            top:1.9rem;
            height:15px;
            width:15px;
            border-radius:50%;
            border:2px solid var(--border-color-2);
            background: var(--background-color);
        }
        h5{
            font-size:1.2rem;
        }
        h6{
            font-size:1rem;
            font-weight:normal;
            margin:.5rem 0;
        }
        p{
            font-size:.8rem;
        }
    }
`


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const ResumeItem = ({year, title, subTitle, text}) => {

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <ResumeItemStyled>
             <div className="content">
                <h5>{title}</h5>
                <h6>{subTitle} / {year}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default ResumeItem
