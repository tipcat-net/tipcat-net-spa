import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from "react-i18next";

import { Layout } from '../../components/ui/Layout';
import { Profile } from '../../components/profile/';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
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

  return (
    <Layout title={ t('memberProfileQrCode.headerTitle') }>
      {
        memberProfile && (
          <Profile className={ style.memberProfileQrCode }>
            <div className={ style.facility }>{ facility.name }</div>
            <ProfileContent>
              <ProfileAvatar data={ `${memberProfile.firstName} ${memberProfile.lastName}` } />
              <ProfileName>{ memberProfile.firstName } { memberProfile.lastName }</ProfileName>
              <div className={ style.permissions }>{ memberProfile.permissions }</div>
              <QrCode url={ memberProfile.qrCodeUrl } />
              <div className={ style.memberCode }>{ memberProfile.memberCode }</div>
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
}

export default MemberProfileQrCode;
