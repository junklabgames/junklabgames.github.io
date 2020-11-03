import React from 'react';

import { Header, Footer, Hero } from '..';

export default ({ children }) => {
  return (
    <React.Fragment>
      <div className="container bg-white">
        <Header></Header>
        <Hero></Hero>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};
