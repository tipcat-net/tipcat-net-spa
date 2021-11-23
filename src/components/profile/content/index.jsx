import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const ProfileContent = ({ children, className }) => (
  <div className={ cn(style.profileContent, className) }>{ children }</div>
);
