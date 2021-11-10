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

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';

export const MemberProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
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

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

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
              <ProfileAvatar data={ `${memberProfile.firstName} ${memberProfile.lastName}` } />
              <ProfileName>{ memberProfile.firstName } { memberProfile.lastName }</ProfileName>
              <ProfileInfo top data={ { title: t('memberProfile.facility'), text: facility.name} } />
              <ProfileInfo data={ { title: t('memberProfile.permissions'), text: memberProfile.permissions} } />
              <ProfileInfo data={ { title: t('memberProfile.email'), text: memberProfile.email} } />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
}

export default MemberProfile;
