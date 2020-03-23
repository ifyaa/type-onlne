import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import Dump from '../components/Dump'

export default ({data}) => {
  return (
    <Layout>
      <Dump data={data} />
      {data.allMdx.nodes.map(({id, excerpt, frontmatter, fields}) => (
        <div key={id}>
          <Link to={fields.slug}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
