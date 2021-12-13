import React from 'react';
import cn from 'classnames';

import { Title } from '../../ui/Title';

import style from './styles.module.scss';

export const ProfileFacilityName = ({ children, className }) => (
  <Title
    level={ 3 }
    className={ cn(style.profileFacilityName, className) }
  >{ children }</Title>
);
