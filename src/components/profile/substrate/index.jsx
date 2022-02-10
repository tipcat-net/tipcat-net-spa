import React, { useEffect } from 'react';
import cn from 'classnames';

import { useComponentVisible } from '../../../hooks/useComponentVisible';
import { Button } from '../../ui/Button';
import { Edit } from '../../ui/Icons';

import style from './styles.module.scss';

export const Substrate = ({ children, visible, closeVisible }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(visible);

  useEffect(() => {
    setIsComponentVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (visible && !isComponentVisible) {
      closeVisible();
    }
  }, [isComponentVisible]);

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
        <Button
          borderNone={ true }
          className={ style.substrateBtnEdit }
          onClick={ closeVisible }
          icon={ <Edit className={ style.substrateBtnEditIcon } /> }
        ></Button>
      </div>
    </div>
  );
};
