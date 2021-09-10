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
const SkillsItemStyled = styled.div`
h6{
    color: var(--font-color);
    font-size:1.1rem;
    padding-bottom: .6rem;
}
.progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height:.4rem;
            background-color: var(--border-color-2);
            span{
                position: absolute;
                left:0;
                bottom:0;
                height:100%;
                background-color: var(--primary-color);
                color: var(--font-color);
            }
        }
    }
`;


//--------------------------------------------------------------
const SkillsItem = ({title , width, text}) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const bar = useRef(null);
    let initialProgress = '0%';

    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (

        <SkillsItemStyled>

            <h6>{title}</h6>

            {/*-----------------------PORCENTAJE-----------------------------*/}
            {/* Animación */}
            <Tween
                to={{
                count: {
                    value: width,
                    format: () => value => `${parseInt(value, 10)} %`,
                },
                scrollTrigger: {
                    trigger: '.square',
                    start: '800px center',
                    end: '1500px center',
                    scrub: 0.5,
                    markers: false,
                    scroller: '.scroll'
                }

                }}
                ease="none"
                duration={50}
                position={2}
            >
                {/* Valor Inicial */}
                <div style={{ fontSize: '30px' }}>0 %</div>
            </Tween>

            {/*-----------------------BARRA-----------------------------*/}
            <div className="progress-bar">
                <div className="progress">
                    {/* Animación */}
                    <Tween
                        to={{
                            width: width,
                            delay: 1,
                            duration: 50,
                            scrollTrigger: {
                                trigger: '.square',
                                start: '800px center',
                                end: '1500px center',
                                scrub: 0.5,
                                markers: false,
                                scroller: '.scroll'
                            },
                        }}
                    >
                        {/* Valor Inicial */}
                        <span ref={bar} style={{width:initialProgress}}></span>
                    </Tween>
                </div>

            </div>


        </SkillsItemStyled>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default SkillsItem;
