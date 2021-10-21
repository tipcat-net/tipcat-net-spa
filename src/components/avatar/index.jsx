import React from 'react';
import cn from 'classnames';
import { ReactComponent as GoneSvg } from './svg/gone.svg';
import style from './styles.module.scss';

export const Avatar = ({ size, className, type, data }) => {
  const classNameSize = size === 'big' ? style.avatarBig : null;
  const classNameType = type === 'invited' ? style.avatarInvited : type === 'active' ? style.avatarActive : null;

  return (
    <div className={ cn(style.avatar, classNameSize, classNameType, className) }>
      <div className={ style.avatarText }>{ data }</div>
      { type !== 'active' ? <GoneSvg className={ style.avatarIcon } /> : null }
    </div>
  )
}

export default Avatar;
