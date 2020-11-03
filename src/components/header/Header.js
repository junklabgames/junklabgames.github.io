import React from 'react';

import { Logo, Socials } from '..';

export default () => {
  return (
    <header role="banner" className="px-4 py-2 flex items-center justify-between">
      <Logo />
      <Socials />
    </header>
  );
};
