import { Avatar } from '../../components/avatar';
import { QrCode } from '../../components/qr-code';
import { Layout } from '../../components/ui/Layout';

import style from './styles.module.scss';
import qrCodeImage from './../../assets/qrCode.png';

export const MemberProfile = () => {
  const qrCodeData = {
    image: qrCodeImage,
    code: 'QG2HSl8',
  }
  return (
    <Layout>
      <div className={ style.memberProfile }>
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