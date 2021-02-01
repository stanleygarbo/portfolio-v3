import React from 'react'
import styled from 'styled-components'
import WebIllustration from '../../images/web-illustration.svg'
import Button from '../Button'

const Container = styled.div`
    width:100%;
    background-size:200%;
    background-repeat:no-repeat;
    background-position:bottom;
    color:#444;
    min-height:100vh;
    position:relative;
    padding:0px 100px;

    .wrapper{
        max-width:1300px;
        margin:0 auto;
        height:100%;

        .text-group{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            position:absolute;
            z-index:2;
            transform:translateY(20px);

            h1{
                font-size:20px;
            }
            h2{
                font-size:100px;
                position:relative;

                &::before{
                    position:absolute;
                    content:'';
                    width:300px;
                    height:5px;
                    background:#FFC200;
                    bottom:0;
                    left:0;
                }

            }

            p{
                margin-top:40px;
                font-weight:300;
                font-size:30px;
                width:390px;
            }
        }

        .img{
            width:59vw;
            height:100%;
            position:absolute;
            top:0;
            right:0;
            background-color:#FFEDC0;
            background-image:url(${WebIllustration});
            background-size:80%;
            background-repeat:no-repeat;
            background-position:center;
        }

    }

    
    @media (max-width:1480px){
        padding:0px 150px;

        .wrapper{
            .text-group{
                h2{
                    font-size:80px;
                }
                p{
                    font-size:22px;
                }
            }
        }
    }


`

const Section1 = () => {
    return (
        <Container>
            <div className='wrapper'>
                <div className='text-group'>
                    <h1>Hello, I am</h1>
                    <h2>Stanley Garbo</h2>
                    <p>Web Designer / Front-end Developer</p>
                    {/* <Socials direction='row' style={{marginTop:'40px'}}/> */}
                    <Button style={{marginTop:'40px'}}>CONTACT</Button>
                </div>
                <div className='img'></div>
            </div>
        </Container>
    )
}

export default Section1
