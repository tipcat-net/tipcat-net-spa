import React from 'react';
import cn from 'classnames';

import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const ProfileInfo = ({ data, top }) => {
  const { title, text } = data;

  return (
    <div className={ cn(style.profileInfo, top ? style.profileInfoTop : null) }>
      { title ? <Text size='small' className={ style.profileInfoTitle }>{ title }</Text> : null }
      { text ? <Text size='big' className={ style.profileInfoText }>{ text }</Text> : null }
    </div>
  )
}
