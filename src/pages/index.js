import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faEnvelopeSquare,
  faEnvelope,
  faSave,
  faGamepad,
  faCaretSquareRight,
  faAngleRight,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';

import { Layout, Games, News, Feed, Contact } from '../components';

// font awesome library creation
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faEnvelopeSquare,
  faEnvelope,
  faSave,
  faGamepad,
  faCaretSquareRight,
  faAngleRight,
  faPlug,
);

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
    allFile(
      filter: { extension: {}, relativeDirectory: { eq: "games" } }
      sort: { fields: [base] }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
