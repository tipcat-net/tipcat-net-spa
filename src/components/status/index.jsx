import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Text } from '../ui/Text';

import { MemberStatus } from '../../constants/MemberStatus';

import style from './styles.module.scss';

export const Status = ({ status, className }) => {
  const { t } = useTranslation();

  let statusClassName = null;

  if (status === MemberStatus.Invited) {
    statusClassName = style.statusInvited;
  } else if (status === MemberStatus.Deactivated) {
    statusClassName = style.statusDeactivated;
  }

  return <Text size='superSmall' className={ cn(style.status, statusClassName, className) }>{ t(`status.${status}`) }</Text>;
};
