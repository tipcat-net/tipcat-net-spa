import React from 'react';
import cn from 'classnames';

import { Title as Value } from '../../ui/Title';
import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const ProfileResult = ({ title, value, className }) => (
  <div className={ cn(style.profileResult, className) }>
    <Text size='small' className={ style.profileResultTitle }>{ title }</Text>
    <Value level={ 2 } className={ style.profileResultValue }>{ value }</Value>
  </div>
);
