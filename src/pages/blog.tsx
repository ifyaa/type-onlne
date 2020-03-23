import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogpost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1> 블러그페이지</h1>
      <ol>
        {data.allContentfulBlogpost.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default Blog
