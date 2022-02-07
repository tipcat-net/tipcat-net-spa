import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Title = ({ level, className, children, ...props }) => {
  const classLevel = level ? style[`h${level}`] : style.h1;

  return (
    <div className={ cn(classLevel, className) } { ...props }>{ children} </div>
  )
}
