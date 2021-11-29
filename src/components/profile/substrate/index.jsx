import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Substrate = ({ children, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={ cn(style.substrate, visible ? style.substrateVisible : null) }>
      <div className={ style.substrateContent }>
        { children }
      </div>
    </div>
  );
}