import React from 'react';

import { Header, Footer, Hero, Wrap } from '..';

import styles from './Layout.module.scss';

export default ({ children }) => {
  return (
    <React.Fragment>
      <Wrap>
        <Header></Header>
        <Hero></Hero>
        <main>{children}</main>
      </Wrap>
      <Footer />
    </React.Fragment>
  );
};
