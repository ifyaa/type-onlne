import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogpost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogpost.title}</h1>
      <p>{props.data.contentfulBlogpost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogpost.body.json, options)}
    </Layout>
  )
}

export default Blog
