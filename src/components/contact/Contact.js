import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Socials } from '..';

export default () => {
  return (
    <section className="bg-gradient-to-t from-purple-light to-purple-dark text-white text-center p-10 mt-24">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-3xl">Get in touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis.
        </p>
        <a href="mailto:hello@junklabgames.com" className="block my-4">
          <FontAwesomeIcon icon="envelope" className="mr-2" />
          hello@junklabgames.com
        </a>
        <Socials color="text-white" />
      </div>
    </section>
  );
};
