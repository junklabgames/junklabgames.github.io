import React from 'react';
import Img from 'gatsby-image';

export default function Games({ data }) {
  return (
    <section className="max-w-screen-lg mx-auto px-4 md:px-0 mt-4 text-center md:mt-24">
      <h2 className="text-4xl mb-2 md:text-5xl">Games</h2>
      <p className="mb-4">
        We specialise in fun, casual, and hyper-casual games on mobile and the web browser. Here are
        some of our titles.
      </p>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row">
        {data.allFile.edges.map(({ node }, index) => (
          <div key={index} className="mr-0 md:mr-4 w-article last:mr-0">
            <Img fluid={node.childImageSharp.fluid} />
            {/* <div className="flex flex-col md:flex-row">{index === 0 && <Buttons />}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

// const Buttons = () => (
//   <React.Fragment>
//     <button className="btn btn-primary mt-4 mr-4 w-full hover-transform-scale">
//       <FontAwesomeIcon className="mr-1" icon="save" />
//       Download
//     </button>
//     <button className="btn btn-primary mt-4 w-full hover-transform-scale">
//       <FontAwesomeIcon className="mr-1" icon="gamepad" />
//       Play
//     </button>
//   </React.Fragment>
// );
