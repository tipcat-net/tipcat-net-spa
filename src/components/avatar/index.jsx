import React from 'react';
import cn from 'classnames';
import { ReactComponent as GoneSvg } from './svg/gone.svg';
import style from './styles.module.scss';

export const Avatar = ({ size, className, type, data }) => {
  const classNameSize = size === 'big' ? style.avatarBig
    : size === 'small' ? style.avatarSmall
      : null;

  const classNameType = type === 'account' ? style.avatarAccount
    : type === 'accountManager' ? style.avatarAccountManager
      : type === 'facility' ? style.avatarFacility
        : null;

  const checkInviteStatus = () => {
    if (data.invitationState && (data.invitationState === 'NotSent' || data.invitationState === 'Sent')) {
      return true;
    } else {
      return false;
    }
  };

  const transformLetters = (value) => {
    const str = value.split(' ');

    if (str[0][0] && str[1][0]) {
      return str[0][0] + str[1][0];
    }

    return value.trim()[0];
  };

  const classNameInvited = checkInviteStatus(data) ? style.avatarInvited : null;

  return (
    <div className={ cn(style.avatar, classNameSize, classNameType, classNameInvited, className) }>
      {
        data.url ? <img src={ data.url } className={ style.avatarImage } alt={ data.text } />
          : <div className={ style.avatarText }>{ transformLetters(data.text) }</div>
      }
      { checkInviteStatus(data) ? <GoneSvg className={ style.avatarIcon } /> : null }
    </div>
  );
};

export default Avatar;
