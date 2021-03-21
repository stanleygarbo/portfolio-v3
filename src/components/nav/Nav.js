import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Socials from '../Socials'

const StyledNav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    color:#444;
    z-index:10;

    .wrapper{
        max-width:100%;
        padding:0 50px;
        margin:0 auto;
        height:90px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-size:20px;

        p{
            font-weight:700;
        }

        
        .hamburger{
            padding:10px;
            cursor:pointer;
            border-radius:100%;
            width:55px;
            height:55px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-end;
            box-shadow:0px 0px 5px #00000060;
            background:#fff;
            transition:.4s;
            z-index:12;

            .line{
                height:2px;
                width:30px;
                border-radius:10px;
                margin:3px;
                background:#444;
                transition:.4s;
            }
            .line:nth-child(2){
                width:23px;
            }

            ${
                props=>props.isMenuOpen &&
                `
                    background:#ff2c2c;
                    .line{
                        background:#fff;
                    }

                    .line:nth-child(1){
                        transform:rotate(45deg) translate(6px,5px);
                    }

                    .line:nth-child(2){
                        opacity:0;
                    }
                    
                    .line:nth-child(3){
                        transform:rotate(-45deg) translate(6px,-5px);
                    }
                `
            }
        }

        .menu{
            position:fixed;
            top:0;
            right:-100%;
            width:100%;
            height:100%;
            transition: .8s;
            display:flex;
            justify-content:flex-end;

            ${props=>props.isMenuOpen && `
                right:0;
            `}

            .backdrop{
                width:0%;
                height:100%;
                background:#7555f550;
                position:absolute;
                right:0;
                top:0;
                z-index:-1;
                transition: .8s;

                ${props=>props.isMenuOpen && `
                    width:100%;
                `}
            }

            .options{
                padding:50px 0px 50px 50px;
                width:400px;
                background:#fff;
                height:100vh;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:start;

                a{
                    text-decoration:none;
                    color:#444;
                }
            }
        }
    }

    @media (max-width:1480px){
        .wrapper{
            padding:0px 50px;
            font-size:18px;
        }
    }

    @media (max-width:570px){
        .wrapper{
            padding:0 30px;
        }
    }

`


const Nav = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false) 
    const [scrollY,setScrollY] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        setScrollY(window.scrollY)
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

    const handleScroll = () =>{
        setScrollY(window.scrollY)
    }

    const keyDownHandler = (e) =>{
        if(e.key === "Escape") {
            setIsMenuOpen(!isMenuOpen)
        }
    }

    const menuClickHandler = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <StyledNav isMenuOpen = {isMenuOpen} >
            <div className='wrapper'>
                <StyledGatsbyLink to='/'><p>Garbo</p></StyledGatsbyLink>
                <Links scrollY={scrollY}/>
                <div className='hamburger' aria-label='hamburger button' role = "button" tabIndex={0} onKeyPress={keyDownHandler} onClick={menuClickHandler}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <div className='menu'>
                    <div className='options'>
                        <Links scrollY={0} isInMenu={true} onClick={menuClickHandler}/>
                        <a href='mailto:stanleygarbo@gmail.com' className='hoverable-text'>
                            stanleygarbo@gmail.com
                        </a>
                        <Socials direction='row'/>
                    </div>
                    <div className='backdrop' role='button' aria-label='backdrop' tabIndex={0} onKeyPress={keyDownHandler} onClick={menuClickHandler}></div>
                </div>
            </div>
        </StyledNav>
    )
}



const Ul = styled.ul`
    list-style-type:none;
    display:flex;
    transition:.8s;

    ${props=>props.scrollY > 100 && `
        transform:translateY(-100px);
    `}
    
    li{
        margin: 0px 0px 0px 50px;
        a{
            color:#444;
            text-decoration:none;
        }
    }



    ${props=>props.isInMenu ? `
        flex-direction:column;
        font-size:40px;
        align-items:start;

        li{
            margin:0;
        }
    `
    :
    `
        @media (max-width:750px){
            display:none;
        }
    `}


`

const StyledGatsbyLink = styled(Link)`
    text-decoration:none;
    color:#444;
`

const Links = ({scrollY,isInMenu,onClick}) =>{
    // const LinksArray = [
    //     {
    //         name:'Home',
    //         href:'/'
    //     },
    //     {
    //         name:'About',
    //         href:'/about'
    //     },
    //     {
    //         name:'Projects',
    //         href:'/projects'
    //     },
    //     {
    //         name:'Contact',
    //         href:'/contact'
    //     },
    // ]

    return <Ul scrollY={scrollY} isInMenu={isInMenu}>
        {/* {LinksArray.map((link,i)=>
            <li className='hoverable-text' key={i}>
                <StyledGatsbyLink to={link.href}>{link.name}</StyledGatsbyLink>
            </li>
        )} */}
        <li className='hoverable-text' onClick={onClick}>
            <StyledGatsbyLink to='/'>Home</StyledGatsbyLink>
        </li>
        <li className='hoverable-text' onClick={onClick}>
            <StyledGatsbyLink to='/#about'>About</StyledGatsbyLink>
        </li>
        <li className='hoverable-text' onClick={onClick}>
            <StyledGatsbyLink to='/#projects'>Projects</StyledGatsbyLink>
        </li>
        <li className='hoverable-text' onClick={onClick}>
            <a href='mailto:stanleygarbo@gmail.com'>Contact</a>
        </li>
        <li className='hoverable-text' onClick={onClick}>
            <a href='https://www.coderko.tech'>Blogs</a>
        </li>
    </Ul>
}

export default Nav
