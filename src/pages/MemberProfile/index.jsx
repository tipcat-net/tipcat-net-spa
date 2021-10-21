import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Substrate } from '../../components/profile/substrate';
import { EditProfile } from '../../components/profile/edit';
import { Avatar } from '../../components/avatar';
import { QrCode } from '../../components/qr-code';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Pen } from '../../components/ui/Icons';

import style from './styles.module.scss';
import qrCodeImage from './../../assets/qrCode.png';

export const MemberProfile = () => {
  const { t } = useTranslation();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

  const qrCodeData = {
    image: qrCodeImage,
    code: 'QG2HSl8',
  }

  return (
    <Layout title={ t('memberProfile.headerTitle') }>
      <div className={ style.memberProfile }>
        <Substrate visible={ visibleSubstrate }>
          <EditProfile />
        </Substrate>
        <div className={ style.memberProfileTop }>
          <div className={ style.memberProfileStatus }>active</div>
          <Button
            clear
            className={ style.memberProfileBtnEdit }
            onClick={ toggleVisibleSubstrate }>
            <Pen className={ style.memberProfileBtnEditIcon } />
          </Button>
        </div>
        <div className={ style.memberProfileAvatar }>
          <Avatar size='big' />
        </div>
        <div className={ style.memberProfileName }>Nicholas Angel</div>
        <div className={ style.memberProfilePermissions }>senior waiter</div>
        <div className={ style.memberProfilePaymentCode }>
          <QrCode data={ qrCodeData } />
        </div>
        <div className={ style.memberProfileEmail }>nicolas.angel@gmail.com</div>
      </div>
    </Layout>
  );
}

export default MemberProfile;
