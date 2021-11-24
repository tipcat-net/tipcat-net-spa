import React from 'react';

import { Title } from '../../ui/Title';

import style from './styles.module.scss';

export const ProfileName= ({ children }) => {
  return (
    <Title level={ 2 } className={ style.profileName }>{ children }</Title>
  )
}
