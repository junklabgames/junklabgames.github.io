import React from 'react';
import logoSmall from '../images/logo-small.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-orange-light to-orange-dark text-white">
      <div className="container flex flex-col text-md md:flex-row">
        <span className="flex-1 pt-8 pb-4 md:py-20 px-4 md:first:pl-0 flex flex-row items-start">
          <img src={logoSmall} alt="Junklab games logo" className="mr-4" />
          <span>
            <h4>Games</h4>
            <span>Block Buster</span>
          </span>
        </span>
        <span className="flex-1 py-4 md:py-20 px-4 first:pl-0">
          <h4>About</h4>
          <p>
            We specialise in fun, casual, and hyper-casual mobile games for mobile devices and web
            browsers. We're an indie game studio who loves to create unique experiences on mobile
            and web browsers.
          </p>
        </span>
        <span className="flex-1 py-4 md:py-20 px-4 first:pl-0">
          <h4>Contact</h4>
          <p>
            We’d love to hear from you! Drop us an email or catch us on any of our social media
            platforms.
          </p>
          <a href="mailto:hello@junklabgame.com">hello@junklabgames.com</a>
        </span>
        <span className="flex-1 py-4 md:py-20 px-4 first:pl-0">
          <h4>junklabgames.com</h4>
          <span>© {new Date().getFullYear()} Junklab Games. All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}
