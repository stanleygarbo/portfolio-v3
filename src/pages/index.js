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
        canonicalHref='https://www.coderko.tech' 
        lang='en'
      />
      {/* <Heading/> */}
      <Section1 />
      <Section2/>
      <Section3 />
    </Layout>
  )
}

export default IndexPage
