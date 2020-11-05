import React from 'react';
import Image from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Post({ title, author, date, description, path, featuredImage }) {
  return (
    <article className="mr-4 w-article mb-8 last:mr-0">
      <Image sizes={featuredImage.childImageSharp.sizes} />
      <header>
        <small>
          <time>{date}</time>
        </small>
        <h4>{title}</h4>
        <a href={path} className="text-tertiary">
          Read Post <FontAwesomeIcon icon="angle-right" />
        </a>
      </header>
    </article>
  );
}
