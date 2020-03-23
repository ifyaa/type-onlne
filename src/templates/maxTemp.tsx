import React from 'react'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import Dump from '../components/Dump'

export default ({data, pageContext}) => {
  const {frontmatter, body} = data.mdx
  const {previous, next} = pageContext
  return (
    <Layout>
      <Dump previous={previous}></Dump>
      <Dump next={next}></Dump>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query Slug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`
