/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`./src/templates/project.js`)
    const result = await graphql(`
        query {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            slug
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
          path: `/projects/${edge.node.frontmatter.slug}`,
          component: projectTemplate,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: edge.node.frontmatter.slug,
          },
        })
    })
}