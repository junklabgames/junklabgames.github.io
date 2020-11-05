import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Post from './Post';

export default function News({ data }) {
  return (
    <section className="text-center max-w-screen-lg mx-auto mt-24">
      <h2 className="text-4xl mb-2 md:text-5xl">News</h2>
      <p className="mb-4">
        Latest and greatest news from Junklab Games. Follow our social accounts to keep up to date
        with all latest news and updates.
      </p>
      <article className="flex justify-center flex-col items-center md:flex-row">
        {data.allMarkdownRemark.edges.map((post) => {
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
      <button className="btn btn-primary hover-transform-scale">
        <FontAwesomeIcon className="mr-1" icon="caret-square-right" />
        View more
      </button>
    </section>
  );
}
