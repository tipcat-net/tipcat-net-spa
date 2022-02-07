import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Save } from '../ui/Icons';

import style from './styles.module.scss';

export const QrCode = ({ url, className }) => {
  const { t } = useTranslation();

  return (
    <div className={ cn(style.qrCode, className) }>
      <Text size='small' className={ style.qrCodeTitle }>{ t('qrCode.title') }</Text>
      <div className={ style.qrCodeImage }>
        <img src={ url } alt={ t('qrCode.title') } />
      </div>
      <Button
        borderNone={ true }
        icon={ <Save className={ style.qrCodeShareIcon } /> }
        className={ style.qrCodeShare }
      >{ t('qrCode.share') }</Button>
    </div>
  );
};

export default QrCode;
