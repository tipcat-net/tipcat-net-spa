import React, { useEffect } from 'react';
import cn from 'classnames';

import { useComponentVisible } from '../../../hooks/useComponentVisible';

import style from './styles.module.scss';

export const Substrate = ({ children, visible, closeVisible }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    if (visible) {
      setIsComponentVisible(true);
    }
    if (visible && !isComponentVisible) {
      closeVisible();
    }
  }, [visible, isComponentVisible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={ ref }
      className={ cn(style.substrate, visible ? style.substrateVisible : null) }
    >
      <div className={ style.substrateContent }>
        { children }
      </div>
    </div>
  );
};
