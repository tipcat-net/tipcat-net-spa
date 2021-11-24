import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../ui/Text';
import { Save } from '../ui/Icons';

import style from './styles.module.scss';

export const QrCode = ({ url }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.qrCode }>
      <Text size='small' className={ style.qrCodeTitle }>{ t('qrCode.title') }</Text>
      <div className={ style.qrCodeImage }>
        <img src={ url } alt={ t('qrCode.title') } />
      </div>
      <Text size='small' strong className={ style.qrCodeShare }>
        <Save className={ style.qrCodeShareIcon } /> { t('qrCode.share') }
      </Text>
    </div>
  )
}

export default QrCode;
