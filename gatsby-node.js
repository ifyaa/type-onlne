const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/maxTemp.tsx`)
  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  const blogTemplate = path.resolve(`./src/templates/blog.tsx`)
  const tagTemplate = path.resolve('./src/templates/tag.tsx')

  return graphql(`
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              tags
              title
            }
          }
        }
      }
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
      allContentfulBlogpost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes
    const posts01 = result.data.allMarkdownRemark.edges
    const res = result.data.allContentfulBlogpost.edges
    // mdx
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
    // Iterate through each post, putting all found tags into `tags`
    let tags = []
    posts01.forEach(post01 => {
      if (post01.node.frontmatter.tags) {
        tags = tags.concat(post01.node.frontmatter.tags)
      }
    })
    const uniqTags = [...new Set(tags)]

    // Create tag pages
    uniqTags.forEach(tag => {
      if (!tag) return
      actions.createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    posts01.forEach((post01, index) => {
      const previous = index === posts01.length - 1 ? null : posts01[index + 1].node
      const next = index === 0 ? null : posts01[index - 1].node

      actions.createPage({
        path: post01.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post01.node.fields.slug,
          previous,
          next,
        },
      })
    })
    //contentful
    res.forEach((edge, index) => {
      const previous = index === res.length - 1 ? null : res[index + 1].node
      const next = index === 0 ? null : res[index - 1].node

      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
//slug
exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  } else {
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({node, getNode})
      actions.createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({page, actions}) => {
  const {createPage} = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*'

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
