import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from "react-i18next";

import { Layout } from '../../components/ui/Layout';
import { Substrate } from '../../components/profile/substrate';
import { EditProfile } from '../../components/profile/edit';
import { Profile } from '../../components/profile/';
import { ProfileTop } from '../../components/profile/top';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfileInfo } from '../../components/profile/info/';

import { MemberPermissions } from '../../constants/MemberPermissions';

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';

export const MemberProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const [memberProfile, setMemberProfile] = useState(null);
  const [facility, setFacility] = useState(null);
  const [accountManager, setAccountManager] = useState(null);
  const { params: { memberId } } = useRouteMatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);

  useEffect(() => {
    put(getAccount(member.accountId))
  }, []);

  useEffect(() => {
    if(account) {
      for (let facilitiesItem of account.facilities) {
        const resultMember = facilitiesItem.members.find(memberItem => memberItem.id === parseInt(memberId));
        const resultAccountManager = facilitiesItem.members.find(memberItem => memberItem.permissions === MemberPermissions.Manager);
        if (resultMember) {
          setMemberProfile(resultMember);
          setFacility(facilitiesItem);
        }
        if (resultAccountManager) {
          setAccountManager(resultAccountManager)
        }
        if((resultMember || memberProfile) && (resultAccountManager || accountManager)) {
          break;
        }
      }
    }
  }, [account]);

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

  const avatarData = (data) => ({
    text: `${data.firstName} ${data.lastName}`,
    url: data.avatarUrl,
    invitationState: data.invitationState
  });

  return (
    <Layout title={ t('memberProfile.headerTitle') }>
      {
        memberProfile && (
          <Profile>
            <Substrate visible={ visibleSubstrate }>
              <EditProfile />
            </Substrate>
            <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ avatarData(memberProfile) } />
              <ProfileName>{ memberProfile.firstName } { memberProfile.lastName }</ProfileName>
              <ProfileInfo top data={ { title: t('memberProfile.facility'), text: facility.name} } />
              <ProfileInfo data={ { title: t('memberProfile.position'), text: memberProfile.position} } />
              <ProfileInfo data={ { title: t('memberProfile.email'), text: memberProfile.email} } />
              <ProfileInfo
                data={ {
                  title: t('memberProfile.accountManager'),
                  text: `${accountManager?.firstName} ${accountManager?.lastName}`
                } } />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
}

export default MemberProfile;
