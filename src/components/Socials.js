import React from 'react'
import styled from 'styled-components'
import BehanceIcon from '../images/be.svg'
import FacebookIcon from '../images/f.svg'
import InstagramIcon from '../images/ig.svg'

const Container = styled.div`

    display:flex;

    ${props=>props.direction === 'row' &&
    `
        & > * {
            margin-right:20px;
        }
    `}
    
    ${props=>props.direction === 'column' &&
    `
        flex-direction:column;
        & > * {
            margin-bottom:10px;
        }
    `}

    a{
        img{
            width:${props=>props.small? '38px' : '50px'};
        }
    }

    @media (max-width:950px){
        a{
            img{
                width:40px;
            }
        }
    }

`

const Socials = ({style,direction,small}) => {
    return (
        <Container style={style} direction = {direction} small={small}>
            <a aria-label='Behance' target='blank' href='https://www.behance.net/stanleygarbo'>
                <img alt='behance icon' src={BehanceIcon}></img>
            </a>
            <a aria-label='Facebook' target='blank' href='https://www.facebook.com/stanley.garbo29'>
                <img alt='facebook icon' src={FacebookIcon}></img>
            </a>
            <a aria-label='Instagram' target='blank' href='https://www.instagram.com/garbo.stanley/'>
                <img alt='instagram icon' src={InstagramIcon}></img>
            </a>
        </Container>
    )
}

export default Socials
