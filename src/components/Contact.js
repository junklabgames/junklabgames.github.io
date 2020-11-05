import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Socials from './Socials';

export default function Contact() {
  return (
    <section className="bg-gradient-to-t from-purple-light to-purple-dark text-white text-center p-10 mt-24">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-3xl">Get in touch</h3>
        <p>
          Interested in working together? Want to build fun, creative games for mobile devices or
          browsers? Drop us a line to chat about future or present projects, or if you'd just like
          to say hi!
        </p>
        <a href="mailto:hello@junklabgames.com" className="block my-4">
          <FontAwesomeIcon icon="envelope" className="mr-2" />
          hello@junklabgames.com
        </a>
        <Socials color="text-white" />
      </div>
    </section>
  );
}
