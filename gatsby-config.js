"use strict";

module.exports = {
  siteMetadata: {
    title: "noyes",
    description: "6개월의 결과.",
    siteUrl: "https://example.com",
    author: {
      name: "Richard Nam",
      url: "https://jeffrafter.com/gatsby-with-typescript/",
      email: "jeffrafter@gmail.com"
    },
    social: {
      twitter: "https://jeffrafter.com/gatsby-with-typescript/",
      github: "https://github.com/jeffrafter"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `mkxosvnp9y7k`,
        accessToken: `yMRQDi6Wc6MuWHevc_Ar1ZExaPLLO_FJoQ7vM4jNz6s`
      }
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e65e0e9c32b5c19173a4db1"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jeffrafter.com`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeff Rafter`,
        short_name: `jeffrafter.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`
  ]
};
