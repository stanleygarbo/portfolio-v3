import React from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import Nav from './nav/Nav'
import BottomBackdrop from '../images/backdrop.svg'
import {graphql,useStaticQuery,Link} from 'gatsby'

const GlobalStyles = createGlobalStyle`

    html{
        scroll-behavior:smooth;
    }

    *{
        font-family: 'Poppins', sans-serif;
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body{
        overflow-x:hidden;
    }

    .hoverable-text{
        position:relative;
        overflow:hidden;

        &::before{
            width:100%;
            position:absolute;
            content:'';
            bottom:0;
            left:-100%;
            height:4px;
            transition:.5s;
            background:#7555f5;
        }

        &:hover::before{
            left:0;
        }

    }
`

const LayoutStyles = styled.div`
    width:100%;

    main{
        width:100%;
    }
`

const StyledMain = styled.main`
    position:relative;

    .bottom-backdrop{
        position:absolute;
        z-index:-1;
        background: url(${BottomBackdrop});
        width:100%;
        height:300px;
        bottom:0;
        background-size:cover;
        background-repeat:no-repeat;
        &::before{
            position:absolute;
            bottom:0;
            content:'';
            left:0;
            width:100%;
            height:100px;
            background:linear-gradient(transparent,#1a164a);


        }
    }

    @media(max-width:539px){
        .bottom-backdrop{
            height:200px;
        }
    }
`

const Footer = styled.footer`
    min-height:400px;
    width:100%;
    background:#1a164a;
    color:#fff;

    ul{
        max-width:1000px;
        margin:0px auto;
        padding-top:50px;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;

        li{
            list-style-type:none;
            padding:20px;
            
            span{
                font-size:18px;                
            }

            div{
                margin-top:10px;
                flex-direction:column;

                a{
                    color:#d4d4d4;
                    font-size:14px;
                    text-decoration:none;
                }
            }
        }
    }

    @media(max-width:539px){
        ul{
            flex-direction:column
        }
    }
    
`

const Layout = ({children}) => {

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <LayoutStyles>
            <Nav/>
            <StyledMain>
                {children}
                <div className='bottom-backdrop'></div>
            </StyledMain>
            <Footer>
                <ul>
                    <li>
                        <span>Stanley Garbo</span>
                        <div className='link'>
                            <Link to='/#about'>
                                About >
                            </Link>
                        </div>
                        <div className='link'>
                            <Link to='/#projects'>
                                Projects >
                            </Link>
                        </div>
                        <div className='link'>
                            <a href='mailto:stanleygarbo@gmail.com'>
                                Contact >
                            </a>
                        </div>
                    </li>
                    
                    <li>
                        <span>Projects</span>
                        {data.allMarkdownRemark.edges.map((edge,i)=>
                            <div key={i}  className='link'>
                                <Link to={`/projects/${edge.node.frontmatter.slug}`}>
                                    {edge.node.frontmatter.title} >
                                </Link>
                            </div>
                        )}
                    </li>
                    
                    <li>
                        <span>&copy;2021 Stanley Garbo</span>
                        <div className='link'>
                            <a href='mailto:stanleygarbo@gmail.com'>stanleygarbo@gmail.com ></a> 
                        </div>
                        <div className='link'>
                            <a href='https://www.facebook.com/stanley.garbo29'>Facebook ></a> 
                        </div>
                        <div className='link'>
                            <a href='https://www.facebook.com/messages/t/stanley.garbo.31'>Messenger ></a> 
                        </div>

                            
                    </li>

                    
                    <li>
                        Site Made With React, <br/>Gatsby and hosted with Netlify 
                    </li>

                </ul>
            </Footer>
            <GlobalStyles/>
        </LayoutStyles>
    )
}

export default Layout
