import React from 'react';

import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';

export default function Hero({ data }) {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <a href="https://apps.apple.com/us/app/brick-buster/id1543321783">
          <Img fluid={data.file.childImageSharp.fluid} alt="Block Buster promotional banner" fadeIn={true} />
        </a>
      )}
    />
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
