import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Text = ({ size, className, children }) => {
  let classSize = null;
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
    <div className={ cn(classSize, className) }>{ children} </div>
  )
}
