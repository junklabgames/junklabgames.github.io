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
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { Helmet } from 'react-helmet';

import Layout from '../layout/Content';
import Hero from '../components/Hero';
import Games from '../components/Games';
import News from '../components/News';
import Feed from '../components/Feed';
import Contact from '../components/Contact';

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
  faArrowLeft,
);

export default function Index({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junklab Games</title>
        <meta
          name="description"
          content="Junklab Games - Creative indie studio specialising in fun, casual mobile games"
        />
      </Helmet>
      <Hero />
      <Games data={data} />
      <News data={data} />
      <Feed />
      <Contact />
    </Layout>
  );
}

export const data = graphql`
  query games {
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
