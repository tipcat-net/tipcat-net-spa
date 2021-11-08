import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { Profile } from '../../components/profile/';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileContentBottom } from '../../components/profile/content/bottom';
import { ProfileTop } from '../../components/profile/top/';
import { ProfileInfo } from '../../components/profile/info/';
import { ProfileName } from '../../components/profile/name/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { Substrate } from '../../components/profile/substrate';
import { EditProfile } from '../../components/profile/edit';
import { Layout } from '../../components/ui/Layout';

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';

export const AccountProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const member = useSelector(selectMember)
  const account = useSelector(selectAccount)

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

  useEffect(() => {
    if (member) {
      put(getAccount(member.accountId))
    }
  }, []);

  return (
    <Layout title={ t('accountProfile.headerTitle') }>
      {
        account && (
          <Profile>
            <Substrate visible={ visibleSubstrate }>
              <EditProfile />
            </Substrate>
            <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ account.operatingName } type='account' />
              <ProfileName>{ account.operatingName }</ProfileName>
              <ProfileInfo top data={ { title: t('accountProfile.address'), text: account.address} } />
              <ProfileInfo data={ { title: t('accountProfile.email'), text: account.email} } />
              <ProfileInfo data={ { title: t('accountProfile.phone'), text: account.phone} } />
              <ProfileContentBottom
                leftLink={ {
                  link: `/account/facility/`, text: t('accountProfile.ProfileContentBottom.leftLink')
                }}
                rightLink={ {
                  link: `/account/members`, text: t('accountProfile.ProfileContentBottom.rightLink')
                }}
              />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
}

export default AccountProfile;
