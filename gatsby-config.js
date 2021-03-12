require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Stanley Garbo | Web developer and web designer Philippines`,
    description: `Builds and designs websites according to your needs`,
    author: `@stanleygarbo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    // `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stanley Garbo - Portfolio`,
        short_name: `Garbo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#7555f5`,
        display: `standalone`,
        icon:`src/images/gatsby-icon.png`
      },
    },
    // { 
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://stanleygarbo.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://stanleygarbo.com',
        sitemap:`https://stanleygarbo.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
