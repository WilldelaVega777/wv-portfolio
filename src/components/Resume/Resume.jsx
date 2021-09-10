//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react'
import { useEffect }                    from 'react'
import { useRef }                       from 'react'
import SchoolIcon                       from '@material-ui/icons/School'
import BusinessCenterIcon               from '@material-ui/icons/BusinessCenter'
import { gsap }                         from 'gsap'
import styled                           from 'styled-components'

import Title                            from './components/Title'
import ResumeItem                       from './components/ResumeItem'
import SkillsItem                       from './components/SkillsItem'
import { InnerLayout }                  from './styles/Layouts'


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const ResumePageStyled = styled.div`
    .resumeSection{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:992px){
            grid-template-columns: repeat(1, 1fr);
        }
        .education {
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
                span{
                    margin-left:.5rem;
                }
            }
            svg{
                color:var(--primary-color);
                font-size:1.8rem;
            }
        }
        .experience{
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
                span{
                    margin-left:.5rem;
                }
            }
            svg{
                color:var(--primary-color);
                font-size:1.8rem;
            }
        }
    }

    .skills{
        display: grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:1.5rem;
        margin-top: 5rem;
        @media screen and (max-width:768px){
            grid-template-columns:repeat(1, 1fr);
        }
    }
`


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const Resume = () =>
{

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const barra = useRef(null);

    //----------------------------------------------------------
    // Lifecycle Eventhandler Section
    //----------------------------------------------------------
    useEffect(() => {
        gsap.to(barra.current, {
            width: 1530,
            delay: 1,
            duration: 1.5, // duration of the animation
        });
    }, []);


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <section>
            <ResumePageStyled>
                {/* Resume Section Start Here */}
                <Title
                    title={'Resume'}
                    span={''}
                />

                <InnerLayout className="resumeSection">
                    <div className="education">
                        <h4><SchoolIcon /><span>Education</span></h4>
                        <ResumeItem
                            year={'2004-2007'}
                            title={'Computer Science'}
                            subTitle={'Cambridge Uiversity'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                        <ResumeItem
                            year={'2008-2010'}
                            title={'Bachleor Degree'}
                            subTitle={'Kingdom University'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                        <ResumeItem
                            year={'2012-2015'}
                            title={'Master Degree'}
                            subTitle={'Hardvard Uiversity'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                    </div>
                    <div className="experience">
                        <h4>
                            <BusinessCenterIcon />
                            <span>
                                Experience
                            </span>
                        </h4>
                        <ResumeItem
                            year={'2015-2017'}
                            title={'App Developer'}
                            subTitle={'Microsoft'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                        <ResumeItem
                            year={'2017-2018'}
                            title={'Software Engineer'}
                            subTitle={'Google'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                        <ResumeItem
                            year={'2019-Present'}
                            title={'Backend Developer'}
                            subTitle={'Adobe'}
                            text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'}
                        />
                    </div>
                </InnerLayout>
                {/* Resume Section End Here */}

                {/* Skills Section Start Here */}
                <div className="my-skills">
                    <Title title={'My Skills'} span={'Skills'} />
                    <InnerLayout>
                        <div className="skills">
                        <SkillsItem
                            title={'HTML5'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <SkillsItem
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <SkillsItem
                            title={'JAVASCRIPT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <SkillsItem
                            title={'BOOTSTRAP'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <SkillsItem
                            title={'REACT JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <SkillsItem
                            title={'NODE JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <SkillsItem
                            title={'MONGO DB'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <SkillsItem
                            title={'EXPRESS JS'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <SkillsItem
                            title={'REACT NATIVE'}
                            width={'85%'}
                            text={'85%'}
                        />
                        </div>
                    </InnerLayout>
                </div>
                {/* Skills Section End Here */}
            </ResumePageStyled>
        </section>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default Resume;
