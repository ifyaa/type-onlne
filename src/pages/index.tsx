import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";
import Bio from "../components/bio";

interface Props {
  readonly data: PageQueryData;
}

export default class Tags extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <Head
          title="All tags"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <article>About Jeff Rafter...</article>
        <p>
          markdownRemark와 mdx, 그리고
          <a href="https://www.contentful.com/" target="''">
            contentful
          </a>
          을 테스트하는 중입니다.
        </p>
        <br />
        <p>
          markdown은 개인문건을 작성하고, mdx는 코딩에 관한..
          <br />
          그리고 contentful은 코딩이나 개인문건과 관련없는 일을 작성하는데
          사용하려고 합니다 ...
          <br />
          <br />이 블로그는{" "}
          <a href="https://jeffrafter.com/gatsby-with-typescript/" target="''">
            Jeff Rafter 의 강의
          </a>
          를 참조했고.
          <br />
          <a
            href="https://thelocalhost.blog/2019/10/31/build-an-mdx-blog/"
            target="''"
          >
            MDX는 Scott Spence의 강의
          </a>
          를 참조했습니다
          <br />
          그리고 마크다운과 contentful의 기본은{" "}
          <a href="https://morioh.com/p/83a805b80804/" target="''">
            {" "}
            이 강의
          </a>
          를 참조했습니다
        </p>
        <br />
      </Layout>
    );
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
