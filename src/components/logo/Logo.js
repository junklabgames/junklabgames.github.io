import React from 'react';
import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';

import styles from './Logo.module.scss';

export default ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="Junklab Games"
          fadeIn={true}
        />
      )}
    />
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 135) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
