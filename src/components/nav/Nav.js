import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledNav = styled.nav`
    position:absolute;
    top:0;
    left:0;
    width:100%;
// background:#1c1b29;
    color:#444;
    z-index:10;

    .wrapper{
        max-width:1300px;
        margin:0 auto;
        height:90px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-size:20px;
    }

`

const Ul = styled.ul`
    list-style-type:none;
    display:flex;

    li{
        a{
            color:#444;
            margin: 0px 0px 0px 50px;
        }
    }

`

const StyledGatsbyLink = styled(Link)`
    text-decoration:none;
`


const Nav = () => {
    return (
        <StyledNav>
            <div className='wrapper'>
                <p>Garbo</p>
                <Ul>
                    <li>
                        <StyledGatsbyLink to=''>Home</StyledGatsbyLink>
                    </li>
                    <li>
                        <StyledGatsbyLink to=''>About</StyledGatsbyLink>
                    </li>
                    <li>
                        <StyledGatsbyLink to=''>Projects</StyledGatsbyLink>
                    </li>
                    <li>
                        <StyledGatsbyLink to=''>Contact</StyledGatsbyLink>
                    </li>
                </Ul>
            </div>
        </StyledNav>
    )
}

export default Nav
