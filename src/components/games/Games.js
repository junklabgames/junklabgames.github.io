import React from 'react';

import Img from 'gatsby-image';

import styles from './Games.module.scss';

export default ({ data }) => {
  return (
    <section className={styles.games}>
      {data.allFile.edges.map(({ node }) => (
        <div className={styles.game}>
          <Img fixed={node.childImageSharp.fixed} />
          <div>
            <button className="primary">Download</button>
            <button className="secondary">Play</button>
          </div>
        </div>
      ))}
    </section>
  );
};
