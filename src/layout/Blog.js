import React from 'react';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

export default function Content({ children, title, date }) {
  return (
    <React.Fragment>
      <div className="container bg-white">
        <Header></Header>
        <Title title={title} date={date} />
        <div className="flex p-20">
          <main className="w-3/4">{children}</main>
          {/* <aside className="w-1/4 text-center">
            <div className="shadow-lg py-20">
              <h3>Follow us for updates</h3>
              <Socials />
            </div>
          </aside> */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const Title = ({ title, date }) => (
  <div className="text-white bg-primary p-10 pb-20">
    <div>
      <Link to="/blog" class>
        <FontAwesomeIcon icon="arrow-left" /> Back to blog
      </Link>
    </div>
    <div className="text-center">
      <strong>{date}</strong>
      <h1 className="text-5xl">{title}</h1>
    </div>
  </div>
);
