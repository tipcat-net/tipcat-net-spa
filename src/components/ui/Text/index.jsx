import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Text = ({ tag, size, strong, className, children, ...props }) => {
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

  if (tag) {
    return (
      React.createElement(
        tag,
        {
          className: cn(classSize, classStrong, className),
          ...props,
        },
        children,
      )
    );
  }

  return (
    <div className={ cn(classSize, classStrong, className) }>{ children }</div>
  );
};
