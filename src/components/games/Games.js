import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';

export default ({ data }) => {
  return (
    <section className="max-w-screen-lg mx-auto flex justify-center mt-4 md:mt-24">
      {data.allFile.edges.map(({ node }, index) => (
        <div key={index} className="mr-4 w-article last:mr-0">
          <Img fluid={node.childImageSharp.fluid} />
          <div className="flex flex-col md:flex-row">{index === 0 && <Buttons />}</div>
        </div>
      ))}
    </section>
  );
};

const Buttons = () => (
  <React.Fragment>
    <button className="btn btn-primary mt-4 mr-4 w-full hover-transform-scale">
      <FontAwesomeIcon className="mr-1" icon="save" />
      Download
    </button>
    <button className="btn btn-primary mt-4 w-full hover-transform-scale">
      <FontAwesomeIcon className="mr-1" icon="gamepad" />
      Play
    </button>
  </React.Fragment>
);
