import React from 'react';
import cn from 'classnames';

import { ReactComponent as GoneSvg } from './svg/gone.svg';

import { MemberStatus } from '../../constants/MemberStatus';

import style from './styles.module.scss';

export const Avatar = ({ size, className, type, data }) => {
  const classNameSize = size === 'big' ? style.avatarBig
    : size === 'small' ? style.avatarSmall
      : null;

  const classNameType = type === 'account' ? style.avatarAccount
    : type === 'accountManager' ? style.avatarAccountManager
      : type === 'facility' ? style.avatarFacility
        : null;

  const transformLetters = (value) => {
    const str = value.split(' ');

    if (str[0] && str[1]) {
      return str[0][0] + str[1][0];
    }

    return value.trim()[0];
  };

  const classNameInvited = data.status && data.status === MemberStatus.Invited ? style.avatarInvited : null;

  const classNameBg = data.url ? style.avatarBg : null;

  return (
    <div className={ cn(style.avatar, classNameSize, classNameType, classNameInvited, classNameBg, className) }>
      {
        data.url ? <img src={ data.url } className={ style.avatarImage } alt={ data.text } />
          : <div className={ style.avatarText }>{ transformLetters(data.text) }</div>
      }
      { classNameInvited ? <GoneSvg className={ style.avatarIcon } /> : null }
    </div>
  );
};

export default Avatar;
