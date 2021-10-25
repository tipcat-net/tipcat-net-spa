import React from 'react';
import cn from 'classnames';
import { ReactComponent as GoneSvg } from './svg/gone.svg';
import style from './styles.module.scss';

export const Avatar = ({ size, className, type, data }) => {
  const classNameSize = size === 'big' ?  style.avatarBig 
    : size === 'small' ? style.avatarSmall
    : null;

  const classNameType = type === 'invited' ? style.avatarInvited
    : type === 'active' ? style.avatarActive
    : type === 'facility' ? style.avatarFacility
    : null;

  const transformLetters = (value) => {
    if(value.length > 2) {
      const str = value.split(' ');
      return str[0][0] + str[1][0];
    }
    return value;
  }

  return (
    <div className={ cn(style.avatar, classNameSize, classNameType, className) }>
      <div className={ style.avatarText }>{ transformLetters(data) }</div>
      { type !== 'active' && type !== 'facility' ? <GoneSvg className={ style.avatarIcon } /> : null }
    </div>
  )
}

export default Avatar;
