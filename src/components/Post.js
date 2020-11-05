import React from 'react';
import Image from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Post({
  title,
  author,
  date,
  description,
  path,
  featuredImage,
  animate = true,
}) {
  return (
    <a href={path}>
      <article className={`mr-4 mb-8 last:mr-0 ${animate ? 'hover-pop-up' : ''}`}>
        <Image fluid={featuredImage.childImageSharp.fluid} />
        <header>
          <small>
            <time>{date}</time>
          </small>
          <h4>{title}</h4>

          <span className="text-tertiary">
            Read Post <FontAwesomeIcon icon="angle-right" />
          </span>
        </header>
      </article>
    </a>
  );
}
