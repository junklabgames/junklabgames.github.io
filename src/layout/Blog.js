import React from 'react';

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
        <div className="flex flex-col lg:flex-row lg:p-20">
          <main className="lg:w-3/4 px-4 lg:pr-20 w-full prose max-w-none">{children}</main>
          <aside className="lg:w-1/4 w-full text-center">
            <div className="shadow-md py-5 flex items-center flex-col">
              <h3 className="mb-4">Fresh off the press</h3>
              <article className="w-article lg:w-full">
                {more.edges.map((post) => {
                  const { title, date, path, featuredImage } = post.node.frontmatter;

                  return (
                    <Post
                      title={title}
                      date={date}
                      key={`${date}__${title}`}
                      path={path}
                      featuredImage={featuredImage}
                      animate={false}
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
  <div className="text-white bg-primary py-10 lg:py-20">
    <div className="text-center">
      <strong>{date}</strong>
      <h1 className="text-3xl lg:text-5xl">{title}</h1>
    </div>
  </div>
);
