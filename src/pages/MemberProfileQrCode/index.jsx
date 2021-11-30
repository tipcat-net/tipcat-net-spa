import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from "react-i18next";

import { Layout } from '../../components/ui/Layout';
import { Title } from '../../components/ui/Title';
import { Profile } from '../../components/profile/';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfilePosition } from '../../components/profile/position';
import { QrCode } from '../../components/qr-code';

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

  useEffect(() => {
    put(getAccount(member.accountId))
  }, []);

  useEffect(() => {
    if(account) {
      for (let facilitiesItem of account.facilities) {
        const result = facilitiesItem.members.find(memberItem => memberItem.id === parseInt(memberId));
        if (result) {
          setMemberProfile(result);
          setFacility(facilitiesItem);
          break;
        }
      }
    }
  }, [account]);

  const avatarData = () => ({
    text: `${memberProfile.firstName} ${memberProfile.lastName}`,
    url: memberProfile.avatarUrl
  });

  return (
    <Layout title={ t('memberProfileQrCode.headerTitle') }>
      {
        memberProfile && (
          <Profile className={ style.memberProfileQrCode }>
            <Title level={ 3 } className={ style.facility }>{ facility.name }</Title>
            <ProfileContent>
              <ProfileAvatar data={ avatarData() } />
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
}

export default MemberProfileQrCode;
