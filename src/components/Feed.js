import React from 'react';

// twitter
import { Timeline } from 'react-twitter-widgets';

// facebook
import { FacebookProvider, Page } from 'react-facebook';

// instagram
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import twitter from '../images/icon-social-twitter.png';
import facebook from '../images/icon-social-facebook.png';
import instagram from '../images/icon-social-instagram.png';

export default function Feed() {
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col items-center justify-center mt-24 md:flex-row md:items-start">
      <div className="w-article mr-4 mb-8 last:mr-0">
        <h3 className="text-lg flex items-center">
          <img className="w-5 mr-2" src={twitter} alt="Twitter Logo" />
          Twitter
        </h3>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'JunklabGames',
          }}
          options={{
            height: '400',
          }}
        />
      </div>
      <div className="w-article mr-4 mb-8 last:mr-0">
        <h3 className="text-lg flex items-center">
          <img className="w-5 mr-2" src={facebook} alt="Facebook Logo" />
          Facebook
        </h3>
        <FacebookProvider appId="679834519343520">
          <Page href="https://www.facebook.com/Junklab-Games-102687201623984" tabs="timeline" />
        </FacebookProvider>
      </div>
      <div className="w-article mr-4 mb-8 last:mr-0 text-center">
        <h3 className="text-lg flex items-center">
          <img className="w-5 mr-2" src={instagram} alt="Instagram Logo" />
          Instagram
        </h3>
        <FontAwesomeIcon className="mt-16 text-gray-400" size="8x" icon="plug" />
      </div>
    </section>
  );
}
