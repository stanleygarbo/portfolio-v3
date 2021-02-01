import React from 'react'
import styled from 'styled-components'
import CharacterIllustration from '../../images/character-illustration.svg'
import Zigzag from '../../images/zigzag.svg'
import Ps from '../../images/ps.png'
import Ai from '../../images/ai.png'
import Js from '../../images/js.png'
import Html5 from '../../images/html5.png'
import Css3 from '../../images/css3.png'
import ReactIcon from '../../images/react.svg'
import Socials from '../Socials'

const Container=styled.div`
    width:100%;
    color:#444;

    .wrapper{
        max-width:1300px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding: 100px 0px;

        .img{
            height:490px;
            background-image:url(${CharacterIllustration});
            width:400px;
            background-repeat:no-repeat;
            background-size:260% 260%;
            background-position:center;
            position:relative;
            top:-10px;
            right:-66px;

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
                left:-80px;
                bottom:30px;
                font-size:140px;
                font-weight:700;
            }
        }

        .about-text{
            h1{
                font-size:120px;
                position:relative;
                top:-50px;
                letter-spacing:10px;

                &::before{
                    content:'';
                    position:absolute;
                    width:70%;
                    height:8px;
                    background:#ffc200;
                    bottom:0;
                    left:0;
                }
                
                &::after{
                    content:'';
                    position:absolute;
                    width:40%;
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

    }

    .wrapper2{
        max-width:1300px;
        margin:0 auto;
        padding-top:100px;
        display:flex;

        section{
            width:50%;

            h1{
                letter-spacing:5px;
                font-size:40px;
                font-weight:500;
                position:relative;
                margin-bottom:90px;
                
                &::before{
                    content:'';
                    position:absolute;
                    width:200px;
                    height:30px;
                    background:url(${Zigzag});
                    background-repeat:no-repeat;
                    background-position:center;
                    bottom:-30px;
                    left:140px;
                }
            }

            p{
                font-size:30px;
                font-weight: 300;
                max-width:490px;
            }

            .icons{
                width:100%;
                display:flex;
                flex-wrap:wrap;

                img{
                    margin:0px 60px 60px 0px;
                    width:100px;
                }
            }
        }
    }

    @media (max-width:1600px){
        padding:100px;
        .wrapper{
            .img{
                p{
                    font-size:100px;
                }
            }
    
            .about-text{
                h1{
                    font-size:100px;
                }
            }
        }
    }



    @media (max-width:1480px){
        padding:50px 150px;
        .wrapper{
            padding: 100px 0px 50px 0px;
            .img{
                width:300px;
                height:390px;
                right:-30px;

                p{
                    font-size:100px;
                    left:-40px;
                }
            }
    
            .about-text{
                z-index:2;
                h1{
                    font-size:100px;
                }
                p{
                    font-size:25px;
                }
            }
        }

        .wrapper2{
            padding: 100px 0px 0px 0px;

            section{
                h1{
                    font-size:30px;
                    
                    &::before{
                        width:130px;
                        height:20px;
                        bottom:-30px;
                        left:140px;
                    }
                }
                p{
                    font-size:22px;
                    padding-right:50px;
                }
                .icons{
                    img{
                        width:70px;
                    }
                }
            }
        }
    }

    @media (max-width:1194px){
        padding:100px 50px;

        .wrapper{
    
            .about-text{
                z-index:2;
                h1{
                    font-size:60px;
                }
            }
        }


    }

`



const Section2 = () => {
    return (
        <Container>
            <div className='wrapper'>
                <div className='img'>
                    <p>01</p>
                </div>
                <div className='about-text'>
                    <h1>ABOUT ME</h1>
                    <p>
                        I am a student who loves to do something
                    </p>
                    <Socials direction='row' style={{marginTop:'70px'}}/>
                </div>
            </div>
            <div className='wrapper2'>
                <section>
                    <h1>WHAT I LOVE</h1>
                    <p>
                        Laborum in tempor nulla do ut.
                        Labore duis qui officia et ipsum enim amet eiusmod labore ullamco.
                    </p>
                </section>
                <section>
                    <h1>SKILL SETS</h1>
                    <div className='icons'>
                        <img src={Ps}></img>
                        <img src={Ai}></img>
                        <img src={Html5}></img>
                        <img src={Css3}></img>
                        <img src={Js}></img>
                        <img src={ReactIcon}></img>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default Section2
