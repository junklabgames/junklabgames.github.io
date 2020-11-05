import React from 'react';

import Post from './Post';

export default function News({ data }) {
  return (
    <section className="text-center max-w-screen-lg px-4 md:px-0 mx-auto mt-24">
      <h2 className="text-4xl mb-2 md:text-5xl">News</h2>
      <p className="mb-4">
        The latest and greatest news and development progress from Junklab Games. Follow our social
        accounts to keep up to date with all the latest updates.
      </p>
      <article className="flex justify-center flex-col items-center md:flex-row">
        {data.allMarkdownRemark.edges.map((post) => {
          const { title, date, path, featuredImage } = post.node.frontmatter;

          return (
            <div className="w-article">
              <Post
                title={title}
                date={date}
                key={`${date}__${title}`}
                path={path}
                featuredImage={featuredImage}
              />
            </div>
          );
        })}
      </article>
      {/* <a href="/blog" className="btn btn-primary hover-transform-scale">
        <FontAwesomeIcon className="mr-1" icon="caret-square-right" />
        View more
      </a> */}
    </section>
  );
}
