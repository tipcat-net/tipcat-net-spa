import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Substrate = ({ children, visible, closeVisible }) => {
  const substrateRef = useRef(null);
  let timeOutId = null;

  useEffect(() => {
    if(substrateRef.current) {
      substrateRef.current.focus();
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  const onBlurHandler = (e) => {
    if(e.relatedTarget) {
      timeOutId = setTimeout(() => {
        closeVisible();
      });
    }
  };

  const onFocusHandler = (e) => {
    clearTimeout(timeOutId);
    if((e.target.localName === 'button') && !(e.target.previousElementSibling && e.target.previousElementSibling.localName === 'input')) {
      substrateRef.current.focus();
    }
  };

  return (
    <div
      ref={ substrateRef }
      onBlur={ onBlurHandler }
      onFocus={ onFocusHandler }
      tabIndex={ -1 }
      className={ cn(style.substrate, visible ? style.substrateVisible : null) }
    >
      <div className={ style.substrateContent }>
        { children }
      </div>
    </div>
  );
};
