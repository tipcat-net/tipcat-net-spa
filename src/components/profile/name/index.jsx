import React from 'react';
import cn from 'classnames';

import { Title } from '../../ui/Title';

import style from './styles.module.scss';

export const ProfileName = ({ className, children }) => {
  return (
    <Title level={ 2 } className={ cn(style.profileName, className) }>{ children }</Title>
  );
};
