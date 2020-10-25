import React from 'react';

import styles from './News.module.scss';

export default () => {
  return (
    <section className={styles.news}>
      <h2>Junklab News</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <img src={`delete-this.png`} alt="blog post" />
        </div>
        <div className={styles.post}>
          <img src={`delete-this.png`} alt="blog post" />
        </div>
        <div className={styles.post}>
          <img src={`delete-this.png`} alt="blog post" />
        </div>
      </div>
      <button className="primary">View more</button>
    </section>
  );
};
