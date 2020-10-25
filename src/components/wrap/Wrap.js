import React from 'react';

import classNames from 'classnames/bind';

import styles from './Wrap.module.scss';

let cx = classNames.bind(styles);

export default ({ children, flex, spaceEvenly, background }) => {
  return (
    <div
      className={cx({
        wrap: true,
        background: background,
        flex: flex,
        spaceEvenly: spaceEvenly,
      })}
    >
      {children}
    </div>
  );
};
