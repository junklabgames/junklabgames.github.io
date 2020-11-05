import React from 'react';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import Post from '../components/Post';

export default function Blog({ children, title, date, more }) {
  return (
    <React.Fragment>
      <div className="container bg-white">
        <Header></Header>
        <Title title={title} date={date} />
        <div className="flex p-20">
          <main className="w-3/4 pr-20 prose max-w-none">{children}</main>
          <aside className="w-1/4 text-center">
            <div className="shadow-lg py-5">
              <h3 className="mb-4">More from the blog</h3>
              <article>
                {more.edges.map((post) => {
                  const { title, date, path, featuredImage } = post.node.frontmatter;

                  return (
                    <Post
                      title={title}
                      date={date}
                      key={`${date}__${title}`}
                      path={path}
                      featuredImage={featuredImage}
                    />
                  );
                })}
              </article>
              <Socials />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const Title = ({ title, date }) => (
  <div className="text-white bg-primary py-20">
    <div className="text-center">
      <strong>{date}</strong>
      <h1 className="text-5xl">{title}</h1>
    </div>
  </div>
);
