import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';

import Layout from '../layout/Blog';

export default function Blog({ data }) {
  const post = data.markdownRemark;
  const more = data.allMarkdownRemark;
  const { title, date } = post.frontmatter;
  return (
    <Layout title={title} date={date} more={more}>
      <Seo />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
        path
      }
      html
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
