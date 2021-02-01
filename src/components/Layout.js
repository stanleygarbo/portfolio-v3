import React from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import Nav from './nav/Nav'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,700&display=swap');

    *{
        font-family: 'Poppins', sans-serif;
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body{
    }
`

const LayoutStyles = styled.div`
    width:100%;

    main{
        width:100%;
    }

`

const Layout = ({children}) => {
    return (
        <LayoutStyles>
            <Nav/>
            <main>
                {children}
            </main>
            <GlobalStyles/>
        </LayoutStyles>
    )
}

export default Layout
