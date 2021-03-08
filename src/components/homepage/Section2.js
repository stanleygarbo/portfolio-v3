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
    padding:50px 150px;

    .wrapper{
        max-width:1100px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding: 100px 0px 50px 0px;

        .img{
            width:300px;
            height:390px;
            right:-30px;
            background-image:url(${CharacterIllustration});
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center;
            position:relative;
            top:-10px;

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
                bottom:30px;
                font-size:100px;
                left:-40px;
                font-weight:700;
            }
        }

        .vertical-text{
            writing-mode: vertical-rl;
            letter-spacing:7px;
            position:relative;

            &::before{
                position:absolute;
                content:'';
                width:1px;
                height:173px;
                background:#444;
                top:220px;
                left:50%;
                right:50%;
            }
        }

        .about-text{
            display:flex;
            flex-direction:column;
            align-items:end;

            h1{
                font-size:80px;
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
                font-size:22px;
                width:390px;
                font-weight:300;
            }
        }

    }

    .wrapper2{
        max-width:1100px;
        margin:0 auto;
        padding: 100px 0px 0px 0px;
        display:flex;

        section{
            width:50%;
            display:flex;
            flex-direction:column;

            h1{
                letter-spacing:5px;
                font-size:30px;
                font-weight:500;
                position:relative;
                margin-bottom:90px;
                
                &::before{
                    content:'';
                    position:absolute;
                    background:url(${Zigzag});
                    background-repeat:no-repeat;
                    background-position:center;
                    
                    width:130px;
                    height:20px;
                    bottom:-30px;
                    left:140px;
                }
            }

            p{
                font-weight: 300;
                max-width:490px;
                font-size:22px;
                padding-right:50px;
            }

            .icons{
                width:100%;
                display:flex;
                flex-wrap:wrap;

                img{
                    margin:0px 60px 60px 0px;
                    width:70px;
                }
            }
        }
    }

    
    @media (max-width:1194px){
        padding:100px 50px;

        .wrapper{
            justify-content:center;
            align-items:center;

                
            .vertical-text{
                display:none;
            }

            .about-text{
                z-index:2;
                justify-content:flex-start;

                h1{
                    font-size:60px;

                    &::after{
                        right:10px;
                    }
                }
            }

            .img{
                margin-right:100px;
            }
        }

        .wrapper2{
            justify-content:center;
            
            section{
                width:380px;

                .icons{
                    img{
                        width:65px;
                    }
                }
            }
        }
    }
    
    @media (max-width:950px){
        .wrapper{
            .about-text{
                h1{
                    top:0;
                    font-size:40px;
                    
                    &::after,&::before{
                        height:4px;
                    }

                    &::before{
                        bottom:-20px;
                    }

                    &::after{
                        bottom:-40px;
                    }
                }
                p{
                    width:300px;
                    font-size:20px;
                }
            }
            .img{
                width:250px;
                height:310px;
                p{
                    font-size:40px;
                }
            }
        }
        
        .wrapper2{
            section{
                width:320px;
                .icons{
                    img{
                        width:45px;
                        margin-right:20px;
                        margin-bottom:20px;
                    }
                }
                h1{
                    margin-bottom:50px;

                    &::before{
                        height:4px;
                    }
                }
                p{
                    font-size:20px;
                }
            }
        }
    }

    
    
    @media (max-width:750px){
        .wrapper{
            flex-direction:column;
            padding:0 30px;
            .about-text{
                width:100%;
                p{
                    width:100%;
                }
            }

            .img{
                width:100%;
                margin-right:50px;
                margin-bottom:100px;
                height:400px;
                background-position-y:30%;
            }
        }
        
        .wrapper2{
            flex-direction:column;
            align-items:center;
            padding:80px 30px 0px 30px;

            section:nth-child(2){
                margin-top:80px;
            }

            section{
                width:100%;
            }

        }
    }

    @media (max-width:570px){
        padding: 100px 30px;
        .wrapper{
            .img{
                width:90%;
                height:250px;
                background-size:135%;
            }
            padding:0;
        }
        .wrapper2{
            padding:80px 0px 0px 0px;
        }
    }


`



const Section2 = () => {
    return (
        <Container id='about'>
            <div className='wrapper'>
                <div className='img'>
                    <p>01</p>
                </div>
                <div className='vertical-text'>Stanley Garbo</div>
                <div className='about-text'>
                    <h1>ABOUT ME</h1>
                    <p>
                        I am a senior high student at ACLC College of Ormoc who does random side projects 
                        with coding just to get over boredom
                    </p>
                    <Socials direction='row' style={{marginTop:'70px'}}/>
                </div>
            </div>
            <div className='wrapper2'>
                <section>
                    <h1>MY PASSION</h1>
                    <p>
                        Ever since I started learning code I've become really interested to it which
                        made me delve deeper into learning not just the basics but also some advanced frameworks
                        associated with tech. 
                    </p>
                </section>
                <section>
                    <h1>SKILL SETS</h1>
                    <div className='icons'>
                        <img alt='HTML icon' src={Html5}></img>
                        <img alt='CSS icon' src={Css3}></img>
                        <img alt='JS icon' src='https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png'></img>
                        <img alt='TS icon' src='https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+typescript-1324451507894042344.png'></img>
                        <img alt='React icon' src={ReactIcon}></img>
                        <img alt='Redux icon' src='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png'></img>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default Section2
