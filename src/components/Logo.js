import React from 'react';
import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';

export default function Logo({ data }) {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Img
          className="w-16 md:w-32"
          fluid={data.file.childImageSharp.fluid}
          alt="Junklab Games"
          // fadeIn={true}
        />
      )}
    />
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
