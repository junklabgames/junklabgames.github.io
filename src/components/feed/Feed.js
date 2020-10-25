import React from 'react';

import styles from './Feed.module.scss';

export default () => {
  return (
    <section className={styles.feed}>
      <div>
        <h3>Twitter</h3>
        <img src="https://placehold.co/330x473" alt="placeholder" />
      </div>
      <div>
        <h3>Facebook</h3>
        <img src="https://placehold.co/330x473" alt="placeholder" />
      </div>
      <div>
        <h3>Instagram</h3>
        <img src="https://placehold.co/330x473" alt="placeholder" />
      </div>
    </section>
  );
};
