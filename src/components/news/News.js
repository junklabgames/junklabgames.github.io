import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <section className="text-center max-w-screen-lg mx-auto mt-24">
      <h2 className="text-4xl mb-4 md:text-5xl">Junklab News</h2>
      <p className="mb-4">
        Latest and greatest news from Junklab Games. Follow our social accounts to keep up to date
        with all latest news and updates.
      </p>
      <article className="flex justify-center flex-col items-center md:flex-row">
        <Article></Article>
        <Article></Article>
        <Article></Article>
      </article>
      <button className="btn btn-primary hover-transform-scale">
        <FontAwesomeIcon className="mr-1" icon="caret-square-right" />
        View more
      </button>
    </section>
  );
};

const Article = () => (
  <article className="mr-4 w-article mb-8 last:mr-0">
    <img src="https://via.placeholder.com/330x170.png?text=Feature-Image" alt="feature image" />
    <header>
      <small>
        <time datetime="2020-05-16">16 May, 2020</time>
      </small>
      <h4>Lorem ipsum dolor sit amet</h4>
      <a href="#" className="text-tertiary">
        Read Post <FontAwesomeIcon icon="angle-right" />
      </a>
    </header>
  </article>
);
