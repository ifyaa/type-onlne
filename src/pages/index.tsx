import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Bio from '../components/bio'
// import Disqus from 'disqus-react'

interface Props {
  readonly data: PageQueryData
}

export default class Index extends React.Component<Props> {
  render() {
    // tawk.to 여기에서
    // var Tawk_API = Tawk_API || {},
    //   Tawk_LoadStart = new Date()
    // ;(function() {
    //   var s1 = document.createElement('script'),
    //     s0 = document.getElementsByTagName('script')[0]
    //   s1.async = true
    //   s1.src = 'https://embed.tawk.to/5e65e0e9c32b5c19173a4db1/1e2vnlqkc'
    //   s1.charset = 'UTF-8'
    //   s1.setAttribute('crossorigin', '*')
    //   s0.parentNode.insertBefore(s1, s0)
    // })()
    // tawk.to  여기까지
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <Head title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Bio />
        <article>
          {/* <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
          <div className={`page-content`}>
            {posts.map(({node}) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                </div>
              )
            })}
          </div>
        </article>
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
