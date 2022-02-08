import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import { Text } from '../ui/Text';

import style from './styles.module.scss';

export const Success = ({ visible, duration, onClose, transparent, actionTop, message, actionBottom, className }) => {
  const classTransparent = transparent ? style.successTransparent : null;
  const timerRef = useRef();

  useEffect(() => {
    if (visible && duration) {
      const timer = setTimeout(() => onClose(), 3000);

      timerRef.current = timer;

      return () => {
        clearTimeout(timerRef.current);
      };
    }
  });

  if (!visible) {
    return null;
  }

  return (
    <div className={ cn(style.success, classTransparent, className) }>
      { actionTop ? <div className={ style.successActionTop }>{ actionTop }</div> : null }
      <Text
        size='small'
        strong={ true }
        className={ style.successMessage }
      >{ message }</Text>
      { actionBottom ? <div className={ style.successActionBottom }>{ actionBottom }</div> : null }
    </div>
  );
};
