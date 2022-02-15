import React, { useEffect } from 'react';
import cn from 'classnames';

import { useComponentUnderCursor } from '../../../hooks/useComponentUnderCursor';
import { Button } from '../../ui/Button';
import { Edit } from '../../ui/Icons';

import style from './styles.module.scss';

export const Substrate = ({ children, visible, closeVisible }) => {
  const {
    ref,
    isComponentUnderCursor,
    setIsComponentUnderCursor,
  } = useComponentUnderCursor(visible);

  useEffect(() => {
    setIsComponentUnderCursor(visible);
  }, [visible]);

  useEffect(() => {
    if (visible && !isComponentUnderCursor) {
      closeVisible();
    }
  }, [isComponentUnderCursor]);

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
