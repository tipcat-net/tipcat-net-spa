import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Text = ({ size, strong, className, children }) => {
  let classSize = null;
  let classStrong = strong ? style.strong : null;

  switch (size) {
    case 'big':
      classSize = style.bigText;
      break;
    case 'small':
      classSize = style.smallText;
      break;
    case 'superSmall':
      classSize = style.superSmallText;
      break;
    default:
      classSize = null;
      break;
  }

  return (
    <div className={ cn(classSize, classStrong, className) }>{ children }</div>
  );
};
