import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const getPost = data.hero.edges.map(post => (
      <Hero content={post.node}/>
  ))
  return (
    <Layout>
    {getPost}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`