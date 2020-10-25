import React from 'react';

import { Layout, Header, Games, News, Feed, Contact } from '../components';

export default function Home({ data }) {
  return (
    <Layout>
      <Games data={data} />
      <News />
      <Feed />
      <Contact />
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { extension: {}, relativeDirectory: { eq: "games" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 330, height: 404) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
