import React from "react"
import Section1 from "../components/homepage/Section1"
import Section2 from "../components/homepage/Section2"
import Section3 from "../components/homepage/Section3"
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => {

  
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="Stanley Garbo's Portfolio Website "
        canonicalHref='https://stanleygarbo.com' 
        lang='en'
        image='https://res.cloudinary.com/dr4q1cnig/image/upload/v1615194004/portfolio%20images/portfolio_ztcgs0.png'
      />
      {/* <Heading/> */}
      <Section1 />
      <Section2/>
      <Section3 />
    </Layout>
  )
}

export default IndexPage
