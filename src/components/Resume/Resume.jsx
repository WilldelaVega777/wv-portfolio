//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from 'react'
import { useEffect }                    from 'react'
import { useRef }                       from 'react'
import PersonIcon                       from '@material-ui/icons/Person'
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
                        <h4><PersonIcon /><span>Soft Skills</span></h4>
                        <ResumeItem
                            year={''}
                            title={'A team leader/player capable to provide consistently great results with minimum or no supervision at all.'}
                            subTitle={''}
                            text={''}
                        />
                        <ResumeItem
                            year={''}
                            title={'Fast learner, keeps updated with the latest technologies.'}
                            subTitle={''}
                            text={''}
                        />
                        <ResumeItem
                            year={''}
                            title={'Empathic, Easygoing and always ready to help'}
                            subTitle={''}
                            text={''}
                        />
                        <ResumeItem
                            year={''}
                            title={'Strong Organizational Skills with Great attention to details.'}
                            subTitle={''}
                            text={''}
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
                            year={'2020-2021'}
                            title={'Software Consultant'}
                            subTitle={'WilldelaVega.com'}
                            text={'Full stack developer, specialized in .NET Core, Node, Angular and React'}
                        />
                        <ResumeItem
                            year={'2010-2019'}
                            title={'Founder'}
                            subTitle={'Geosys Online'}
                            text={'Development of customer solutions with Angular 2-10 and ASP.NET Core WebApi / Node Express with GraphQL'}
                        />
                        <ResumeItem
                            year={'2007-2010'}
                            title={'Sr. Microsoft .NET Web Developer'}
                            subTitle={'Symetri Internet Marketing'}
                            text={'Interacted with Business side for maintenance of existing ASP.NET Web Applications'}
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
                                title={'ANGULAR'}
                                width={'90%'}
                                text={'90%'}
                            />
                            <SkillsItem
                                title={'REACT'}
                                width={'75%'}
                                text={'75%'}
                            />
                            <SkillsItem
                                title={'JAVASCRIPT'}
                                width={'90%'}
                                text={'90%'}
                            />
                            <SkillsItem
                                title={'C#'}
                                width={'85%'}
                                text={'85%'}
                            />
                            <SkillsItem
                                title={'ASP.NET CORE'}
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
                                title={'SQL SERVER'}
                                width={'65%'}
                                text={'65%'}
                            />
                            <SkillsItem
                                title={'REACT NATIVE'}
                                width={'65%'}
                                text={'65%'}
                            />
                            <SkillsItem
                                title={'IONIC'}
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
