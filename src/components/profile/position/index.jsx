import React from 'react';
import cn from 'classnames';

import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const ProfilePosition = ({ className, children }) => {
  if (!children) {
    return null;
  }
  
  return (
    <Text size='small' className={ cn(style.profilePosition, className) }>{ children }</Text>
  )
};
