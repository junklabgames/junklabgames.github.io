import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Content({ children }) {
  return (
    <React.Fragment>
      <div className="container bg-white">
        <Header></Header>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
