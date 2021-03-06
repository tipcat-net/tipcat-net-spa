import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { Profile } from '../../components/profile/';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileFacilityName } from '../../components/profile/facilityName';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfilePosition } from '../../components/profile/position';
import { QrCode } from '../../components/qr-code';
import { useMemberStatus } from '../../hooks/memberStatus';

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';

import style from './styles.module.scss';

export const MemberProfileQrCode = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [memberProfile, setMemberProfile] = useState(null);
  const [facility, setFacility] = useState(null);
  const { params: { memberId } } = useRouteMatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const status = useMemberStatus(memberProfile);

  useEffect(() => {
    put(getAccount(member.accountId));
  }, []);

  useEffect(() => {
    if(account) {
      for (let facilitiesItem of account.facilities) {
        const result = facilitiesItem.members ? facilitiesItem.members.find(memberItem => memberItem.id === parseInt(memberId)) : null;

        if (result) {
          setMemberProfile(result);
          setFacility(facilitiesItem);
          break;
        }
      }
    }
  }, [account]);

  const avatarData = (memberProfile, status) => ({
    text: `${memberProfile.firstName} ${memberProfile.lastName}`,
    url: memberProfile.avatarUrl,
    status: status,
  });

  return (
    <Layout title={ t('memberProfileQrCode.headerTitle') }>
      {
        memberProfile && (
          <Profile className={ style.memberProfileQrCode }>
            <ProfileFacilityName className={ style.facility }>{ facility.name }</ProfileFacilityName>
            <ProfileContent className={ style.content }>
              <ProfileAvatar data={ avatarData(memberProfile, status) } />
              <ProfileName>{ memberProfile.firstName } { memberProfile.lastName }</ProfileName>
              <ProfilePosition className={ style.position }>{ memberProfile.position }</ProfilePosition>
              <QrCode url={ memberProfile.qrCodeUrl } className={ style.qrCode } />
              <div className={ style.memberCode }>{ memberProfile.memberCode }</div>
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
};

export default MemberProfileQrCode;
