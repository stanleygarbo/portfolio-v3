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

    a{
        img{
            width:60px;
        }
    }

`

const Socials = ({style,direction}) => {
    return (
        <Container style={style} direction = {direction}>
            <a>
                <img src={BehanceIcon}></img>
            </a>
            <a>
                <img src={FacebookIcon}></img>
            </a>
            <a>
                <img src={InstagramIcon}></img>
            </a>
        </Container>
    )
}

export default Socials
