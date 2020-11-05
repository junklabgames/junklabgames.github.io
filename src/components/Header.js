import React from 'react';

import Logo from './Logo';
import Socials from './Socials';

export default function Header() {
  return (
    <header role="banner" className="px-4 py-2 flex items-center justify-between">
      <Logo />
      <Socials />
    </header>
  );
}
