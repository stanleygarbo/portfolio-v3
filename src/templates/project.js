import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from '../components/SEO'
import Socials from '../components/Socials'
import WavyPattern from '../images/wavy-pattern.svg'

const StyledContainer = styled.div`
    margin: 100px auto;
    max-width:1000px;
    color:#444;

    .frame{
        border-radius:10px;
        background:linear-gradient(45deg,#fff,#d4d4d4);
        padding:10px;
        box-shadow: 0px 50px 100px #00000050;
        font-size:0;
        border-bottom: 3px solid #999;
    }

    .wavy-pattern{
        background:url(${WavyPattern});
        width:800px;
        height:150px;
        position:absolute;
        background-size:contain;
        background-repeat:no-repeat;
        top:80px;
        right:50%;
        transform:rotate(10deg);
    }

    img{
        object-fit:cover;
        border-radius:10px;
        position:relative;
    }

    section{
        align-items:center;
        display:flex;
        position:relative;
        padding-top:50px;
        margin-bottom:80px;

        
        .not-mobile{
            img{
                width:400px;
                height:300px;
            }
        }
            
        .mobile{
            img{
                width:296px;
            }
        }

        .right{
            margin-left:90px;
        }

        .right{
            h1,h2{
                position:relative;
                &::before{
                    position:absolute;
                    content:'';
                    width:150px;
                    left:-180px;
                    height:5px;
                    bottom:50%;
                    top:50%;
                    background:#7555f5;
                }
            }
        }
        .left{
            margin-right:90px;
        }
    }

    img{
        width:100%;
    }

    h2{
        margin-top: 20px;
    }

    blockquote{
        margin-top:20px;
    }

    ul{
        list-style-type:none;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        margin: 60px 0;

        li{
            margin-top:20px;
            text-transform:uppercase;
            width:200px;

            p{
                color:#444;
                font-size: 16px;
                font-weight:600;
                letter-spacing:2px;
            }
            ul{
                margin:0;
                li{
                    margin:0;
                    color:#777;
                    font-weight:300;
                    font-size:15px;
                    text-transform:capitalize;
                }
            }
        }
    }

    .images{
        display:flex;
        justify-content:space-between;
        margin:150px 0px;

        & > *{
            width:290px;
        }

        div:nth-child(even){
            transform:translateY(70px);
            z-index:5;
        }
    }

    @media(max-width:1085px){
        padding:0px 50px;
        section{
            .right{
                margin-left:50px;
                h1,h2{

                    &::before{
                        width:76px;
                        left:-90px;
                    }
                }
            }
            
            .left{
                margin-right:50px;
            }
        }
    }

    
    @media(max-width:995px){
        padding:0px 50px;
    }
    
    @media(max-width:858px){
        
        .frame{
            padding:5px;
        }

        .wavy-pattern{
            display:none;
        }
        
        section{
            flex-direction:column;
            margin-top:50px;
            padding:0;

            .right{
                margin:50px 0 0 0;
                
                h1,h2{
                    text-align:center;

                    &::before{
                        width:4px;
                        height:80px;
                        top:-90px;
                        left:50%;
                        right:50%;

                    }
                }
            }
            .left{
                margin: 0 0 50px 0;
            }
        }
    }

    @media(max-width:539px){
        .mobile{
            padding:3px;
            border-bottom: 1px solid #999;
        }

        padding:0px 20px;
        
        section{
            .not-mobile{
                img{
                    width:100%;
                } 
            }
        }
    }

    

`

const StyledSocials = styled.div`
    position:fixed;
    height:100vh;
    display:flex;
    top:0;
    left: 10%;
    transform: translateX(-70px);

    @media(max-width:1206px){
        left: 10px;
        transform: translateX(0px);
    }
    
    @media(max-width:1006px){
        display:none;
    }
`

const StyledCards = styled.div`
    margin: 0px auto;
    max-width:1000px;
    display:flex;
    justify-content:start;
    overflow-x:scroll;

    &::-webkit-scrollbar{
        display:none;
    }

    .card-container{
        padding:20px;
        background:#44444440;
        border-radius:20px;
        border:1px solid #ffffff40;
        backdrop-filter:blur(40px);
        display:flex;
        color:#fff;
        min-width:600px;

        .project-card{
            min-width:200px;
            max-width:200px;
            padding:20px;
            min-height:250px;
            background:linear-gradient(45deg,#7555f5,#2926fb);
            border-radius:20px;
            color:#fff;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

            .text{
                h3{
                    margin:0px 0px 10px 10px;
                }

                p{
                    margin-left:10px;
                    font-weight:light;
                    font-size:13px;
                    color:#d4d4d4;
                }
            }

            .links{

                a{
                    text-decoration:none;
                    padding:5px 10px;
                    color:#fff;
                    transition:.3s; 
                    border-radius:10px;
                    border:1px solid #ffffff00;
                    backdrop-filter:blur(0px);

                    &:hover{
                        border:1px solid #ffffff50;
                        backdrop-filter:blur(40px);
                        background:#ffffff20;
                    }
                }
            }
        }
        .other-projects{
            margin-left:20px;
            overflow-y:scroll;
            &::-webkit-scrollbar{
                display:none;
            }

            h4{
                margin-bottom:20px;
            }
            
            p{
                position:relative;
                left:0px;
                margin-top:10px;
                border-radius:10px;
                border:1px solid #ffffff00;
                backdrop-filter:blur(0px);
                transition:.3s; 
                padding:5px 10px 5px 20px;
                overflow:hidden;
                display:flex;
                flex-direction:column;
                justify-content:center;

                &::before{
                    width:3px;
                    height:70%;
                    border-radius:10px;
                    position:absolute;
                    left:7px;
                    content:'';
                    background: #ffffff20;
                    border:1px solid #ffffff20;
                    backdrop-filter:blur(40px);
                }
                    
                &:hover{
                    border:1px solid #ffffff30;
                    backdrop-filter:blur(40px);
                    background:#ffffff10;
                }

                .other-desc{
                    font-size:13px;
                    color:#d4d4d4;
                }
            }
        }
    }
    
    @media(max-width:1085px){
        padding:0px 50px;
    }

    @media(max-width:539px){
        padding:0px 20px;
    }

`


const StyledGatsbyLink = styled(Link)`
    text-decoration:none;
    color:#fff;
`

const truncate = (str,n) => {
    return str.length > n ? str.substr(0, n-1) + '...' : str;
}

const project = ({data}) => {

    const demoLink = data.markdownRemark.frontmatter.demo 
    const codeLink = data.markdownRemark.frontmatter.code
    const downloadLink = data.markdownRemark.frontmatter.download
    const title = data.markdownRemark.frontmatter.title
    const desc = data.markdownRemark.frontmatter.summary
    const slug = data.markdownRemark.frontmatter.slug
    const image = data.markdownRemark.frontmatter.image

    return (
        <Layout>
            <SEO 
                lang='en' 
                description={desc} 
                title={title}
                canonicalHref={`https://stanleygarbo.com/projects/${slug}`}
                image={image}
            />
            <StyledSocials style={{alignItems:'center'}}>
                <Socials direction='column' small />
            </StyledSocials>
            <StyledContainer dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
            <StyledCards>
                <div className='card-container'>
                    <div className='project-card'>
                        <div className='text'>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                        <div className='links'>
                            {demoLink && <a target='blank' href={demoLink}>Demo</a>}
                            {codeLink && <a target='blank' href={codeLink}>Code</a>}
                            {downloadLink && <a target='blank' href={downloadLink}>Download Demo</a>}
                        </div>
                    </div>
                    <div className='other-projects'>
                    <h4>Other Projects</h4>
                        {data.allMarkdownRemark.edges.map((edge,i)=>
                            <StyledGatsbyLink to={`/projects/${edge.node.frontmatter.slug}`} key={i}>
                                <p>
                                    {edge.node.frontmatter.title}
                                    <br/>
                                    <span className='other-desc'>
                                        {truncate(edge.node.frontmatter.summary,49)}
                                    </span>
                                </p>
                            </StyledGatsbyLink>
                        )}
                    </div>
                </div>
            </StyledCards>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter:{slug: { eq: $slug }} ) {
            frontmatter{
                title
                tags
                code
                demo
                download
                slug
                summary
                image
            }
            html
        }
            
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content)/"  }, frontmatter:{slug:{ne:$slug}}}) {
            edges{
                node{
                    frontmatter{
                        title          
                        summary
                        tags
                        slug
                      	image
                    }
                }
            }
        }
    }
`

export default project
