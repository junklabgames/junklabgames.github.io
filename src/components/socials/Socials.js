import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '../../../site.config';

export default ({ color = 'text-gray-400', className }) => {
  return (
    <div>
      {config.socials.map(({ icon, href }) => (
        <Link href={href} icon={icon} color={color} className={className} />
      ))}
    </div>
  );
};

const Link = ({ href, icon, color, className }) => {
  return (
    <a href={href} className="mr-4 last:mr-0">
      <FontAwesomeIcon
        icon={['fab', icon]}
        className={`${color} hover-transform-scale ${className}`}
        size="2x"
      />
    </a>
  );
};
