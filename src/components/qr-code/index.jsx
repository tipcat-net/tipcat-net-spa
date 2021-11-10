import { useTranslation } from "react-i18next";

import { Save } from '../ui/Icons';

import style from './styles.module.scss';

export const QrCode = ({ url }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.qrCode }>
      <div className={ style.qrCodeTitle }>{ t('qrCode.title') }</div>
      <div className={ style.qrCodeImage }>
        <img src={ url } alt={ t('qrCode.title') } />
      </div>
      <div className={ style.qrCodeShare }>
        <Save className={ style.qrCodeShareIcon } /> { t('qrCode.share') }
      </div>
    </div>
  )
}

export default QrCode;
