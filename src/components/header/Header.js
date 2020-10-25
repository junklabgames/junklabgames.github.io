import React from 'react';

import { Logo } from '..';

import styles from './Header.module.scss';

export default () => {
  return (
    <header role="banner" className={styles.header}>
      <Logo />
    </header>
  );
};
