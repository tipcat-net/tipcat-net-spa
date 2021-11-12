import React from 'react';
import { useTranslation } from "react-i18next";
import cn from 'classnames';

import style from './styles.module.scss';

export const Status = ({ status }) => {
  const { t } = useTranslation();

  const statusInfo = {
    className: null,
    text: t('status.active')
  }

  if (status === 'invited') {
    statusInfo.text = t('status.invited');
    statusInfo.className = style.statusInvited;
  } else if (status === 'deactivated') {
    statusInfo.text = t('status.deactivated');
    statusInfo.className = style.statusDeactivated;
  }
  
  return <div className={ cn(style.status, statusInfo.className) }>{ statusInfo.text }</div>
}
