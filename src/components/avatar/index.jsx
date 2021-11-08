import React from 'react';
import cn from 'classnames';
import { ReactComponent as GoneSvg } from './svg/gone.svg';
import style from './styles.module.scss';

export const Avatar = ({ size, className, type, data, invited }) => {
  const classNameSize = size === 'big' ?  style.avatarBig 
    : size === 'small' ? style.avatarSmall
    : null;

  const classNameType = type === 'account' ? style.avatarAccount
    : type === 'facility' ? style.avatarFacility
    : null

  const classNameInvited = invited ? style.avatarInvited : null;

  const transformLetters = (value) => {
    if(value.length > 2) {
      const str = value.split(' ');
      return str[0][0] + str[1][0];
    }
    return value;
  }

  return (
    <div className={ cn(style.avatar, classNameSize, classNameType, classNameInvited, className) }>
      <div className={ style.avatarText }>{ transformLetters(data) }</div>
      { invited ? <GoneSvg className={ style.avatarIcon } /> : null }
    </div>
  )
}

export default Avatar;
