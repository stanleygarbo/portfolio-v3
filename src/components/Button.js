import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:200px;
    display:flex;
    justify-content:flex-start;
    position:relative;

    &::before{
        content:'';
        position:absolute;
        left:-30px;
        bottom:-7px;
        z-index:-1;
        width:80px;
        height:80px;
        border-radius:100%;
        background:#7555f550;
    }

    svg{
        cursor:pointer;
    }

    svg:hover{
        .gradient-path{
            transform:scaleX(1.11);
        }
    }

    @media (max-width:570px){
        width:140px;

        &::before{
            left:-20px;
            bottom:-7px;
            width:60px;
            height:60px;
        }
    }
`

const Button = ({children,style}) => {
    return (
        <Container style={style}>
            <svg
                id="prefix__Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 266.94 86.21"
                xmlSpace="preserve"
                >
                <style>
                    {".prefix__st0{fill:none;stroke:#444;stroke-miterlimit:10}"}
                </style>
                <circle className="prefix__st0" cx={7.2} cy={79} r={6.8} />
                <path className="prefix__st0" d="M14 79h218.2l24-72L14 7.2" />
                {/* <StyledPath 
                    style={{
                        transformOrigin: "8% 0",
                        transition: "all .3s",
                    }}
                    fill="#7555f5" d="M19.2 16v54h204l18-54z" 
                /> */}
                <path className='gradient-path'
                    style={{
                        transformOrigin: "8% 0",
                        transition: "all .3s",
                    }}
                    fill="#7555f5"
                    d="M19.25 15.96v54h204l18-54z"
                />
                <path className="prefix__st0" d="M7.2 61V25" />
                <circle className="prefix__st0" cx={7.2} cy={7.2} r={6.8} />
                <text
                    transform="translate(66.618 51.483)"
                    fontSize={23}
                    fontFamily="'Poppins',sans-serif"
                    fill="#fdfdff"
                >
                    {children}
                </text>
                </svg>
        </Container>
    )
}

export default Button
