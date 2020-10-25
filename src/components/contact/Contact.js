import React from 'react';

import styles from './Contact.module.scss';

export default () => {
  return (
    <section className={styles.contact}>
      <h3>Get in touch</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <a href="email:hello@junklabgames.com">hello@junklabgames.com</a>
    </section>
  );
};
