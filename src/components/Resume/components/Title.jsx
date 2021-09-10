//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                   from 'react'
import { useRef }                   from 'react'
import styled                       from 'styled-components'
import { Tween }                    from 'react-gsap'


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const TitleStyled = styled.div`
    text-transform: capitalize;
    letter-spacing:.1rem;
    h1{
        position: relative;
        &::before{
            content:'';
            position: absolute;
            width:10.8rem;
            height:.3rem;
            border:2px solid var(--border-color-2);
            left:0;
            bottom:-10px;
            border-radius: 10px;
        }
        .progress{
                position: relative;
                width: 27%;
                height:.4rem;
                span{
                    position: absolute;
                    left:0;
                    height:100%;
                    background-color: var(--primary-color);
                    background-color: var(--primary-color);
                    bottom:-8px;
                    border-radius: 10px;
                }
            }
    }
`


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Title = ({title, span}) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const bar = useRef(null);
    let initialProgress = '90%';


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <TitleStyled>
            <h1>{title}
            {/*-----------------------BARRA-----------------------------*/}
                <div className="progress-bar">
                    <div className="progress">
                        {/* Animación */}
                        <Tween
                        to={{
                            width: 176,
                            delay: 0.5,
                            duration: 2
                        }}
                        >
                            {/* Valor Inicial */}
                            <span ref={bar} style={{width:10}}></span>
                        </Tween>
                    </div>

            </div></h1>
        </TitleStyled>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Title;
