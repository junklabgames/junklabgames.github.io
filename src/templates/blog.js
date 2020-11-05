import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layout/Blog';

export default function Blog({ data }) {
  const post = data.markdownRemark;
  const { title, author, date } = post.frontmatter;
  return (
    <Layout title={title} date={date}>
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
  }
`;
