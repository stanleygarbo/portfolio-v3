import React from 'react'
import styled from 'styled-components'
import Plantasy from '../../images/plantasy.png'
import PtojectsIllustration from '../../images/projects-illustration.svg'

const Container = styled.div`
    width:100%;
    color:#444;

    .wrapper{
        max-width:1300px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;

        .projects-text{
            h1{
                font-size:120px;
                position:relative;
                top:-50px;
                letter-spacing:10px;

                &::before{
                    content:'';
                    position:absolute;
                    width:40%;
                    height:8px;
                    background:#ffc200;
                    bottom:0;
                    left:0;
                }
                
                &::after{
                    content:'';
                    position:absolute;
                    width:70%;
                    height:8px;
                    background:#ffc200;
                    bottom:-50px;
                    right:0;
                }
            }

            
            p{
                margin-top:70px;
                font-size:30px;
                width:390px;
                font-weight:300;
            }
        }
        .img{
            height:490px;
            width:400px;
            background-color:#e6e6e6;
            background-image:url(${PtojectsIllustration});
            background-repeat:no-repeat;
            background-size:200%;
            background-position:center;
            position:relative;
            top:-10px;
            right:66px;

            &::before{
                content:'';
                position:absolute;
                width:100%;
                height:100%;
                bottom:-20px;
                left:-20px;
                border: 2px solid #444; 
            }

            p{
                position:absolute;
                right:-80px;
                bottom:30px;
                font-size:140px;
                font-weight:700;
            }
        }
    }

    .wrapper2{
        max-width:1300px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding: 100px 0px;
        position:relative;

        .project{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:35px;

            .img{
                background-color:#e6e6e6;
                background-image:url(${Plantasy});
                background-repeat:no-repeat;
                background-position:center;
                background-size:cover;
                position:relative;
                
                &::before{
                    content:'';
                    position:absolute;
                    width:100%;
                    height:100%;
                    bottom:-20px;
                    left:-20px;
                    background:#444;
                    z-index:-1;
                }
            }

            .text{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                transform:translateY(-20px);
                
                h2{
                    font-size:80px;
                    letter-spacing:8px;
                    position:relative;

                    &::before{
                        content:'';
                        position:absolute;
                        width:90px;
                        height:8px;
                        background:#7555f5;
                        bottom:0;
                        right:0;
                    }
                }

                p{
                    font-size:25px;
                    margin-top:50px;
                    font-weight:300;
                }

                section{
                    margin-top:50px;

                    span{
                        margin:0px 20px 20px 0px;
                        padding:3px 10px;
                        background:#e6e6e6;
                        border-radius:5px;
                    }
                }
            }
        }
    }

    
    @media (max-width:1600px){
        padding:0px 100px;
        .wrapper{
            .img{
                width:300px;
                height:390px;
                
                p{
                    font-size:100px;
                }
            }
    
            .projects-text{
                h1{
                    font-size:100px;
                }
                p{
                    font-size:22px;
                }
            }
        }
    }
    
    @media (max-width:1480px){
        padding:100px 150px;
        .wrapper{
            .img{
                right:30px;
                p{
                    font-size:100px;
                    right:-30px;
                }
            }
    
            .projects-text{
                z-index:2;
                h1{
                    font-size:100px;
                }
            }
        }
        
    
        .wrapper2{
            .project{
                .text{
                    p{
                        font-size:22px;
                    }
                }
            }
        }
    }


    @media (max-width:1194px){
        padding:100px 50px;

        .wrapper{
            .img{
                right:30px;
                p{
                    font-size:80px;
                    right:-30px;
                }
            }
    
            .projects-text{
                z-index:2;
                h1{
                    font-size:80px;
                }
            }
        }
        
        .wrapper2{
            .project{
                .text{
                    h2{
                        font-size:50px;
                    }
                    p{
                        font-size:22px;
                    }
                }
            }
        }
    }
`

const Section3 = () => {
    return (
        <Container>
            <div className='wrapper'>
                <div className='projects-text'>
                    <h1>PROJECTS</h1>
                    <p>I am currently working on my portfolio still.</p>
                </div>
                <div className='img'>
                    <p>02</p>
                </div>
            </div>
            <div className='wrapper2'>
                <div className='project'>
                    <div className='img'></div>
                    <div className='text'>
                        <h2>PLANTASY</h2>
                        <p>Officia incididunt reprehenderit dolore ipsum elit ex veniam pariatur.</p>
                        <section>
                            <span>#WebDesign</span>
                            <span>#Photoshop</span>
                            <span>#Illustrator</span>
                        </section>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Section3
