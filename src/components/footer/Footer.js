import React from 'react';

import { Wrap } from '..';

import styles from './Footer.module.scss';

export default () => {
  return (
    <footer className={styles.footer}>
      <Wrap flex spaceEvenly>
        <span>
          <h4>Games</h4>
          <span>Block Buster</span>
        </span>
        <span>
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </span>
        <span>
          <h4>Contact</h4>
          <p>
            We’d love to hear from you! Drop us an email or catch us on any of
            our social media platforms.
          </p>
          <a href="mailto:hello@junklabgame.com">hello@junklabgames.com</a>
        </span>
        <span>
          <h4>junklabgames.com</h4>
          <span>socials...</span>
          <span>© {new Date().getFullYear()} Junklab Games. All Rights</span>
          <span>Reserved. Privacy Policy | Terms of Use | House Rules</span>
        </span>
      </Wrap>
    </footer>
  );
};
