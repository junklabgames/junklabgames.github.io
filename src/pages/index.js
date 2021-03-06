import React from 'react';
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

import Seo from '../components/Seo';

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
  const { file } = data;

  return (
    <Layout>
      <Seo title="Junklab Games" image={file.childImageSharp.fixed} />
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

    file(relativePath: { eq: "og-image.png" }) {
      childImageSharp {
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
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
