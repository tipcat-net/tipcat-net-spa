import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { Substrate } from '../../components/profile/substrate';
import { Profile } from '../../components/profile/';
import { ProfileTop } from '../../components/profile/top';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfileInfo } from '../../components/profile/info/';
import { MemberProfileEdit } from '../../components/profile/edit/member';
import { useMemberStatus } from '../../hooks/memberStatus';
import { Success } from '../../components/success';

import { MemberPermissions } from '../../constants/MemberPermissions';

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount, selectAccountLoading } from '../../ducks/account/selectors';

export const MemberProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [memberProfile, setMemberProfile] = useState(null);
  const [facility, setFacility] = useState(null);
  const [accountManager, setAccountManager] = useState(null);
  const { params: { memberId } } = useRouteMatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);
  const delayBeforeClosing = 3000;
  const status = useMemberStatus(memberProfile);

  const closeVisibleSuccess = () => {
    setVisibleSuccess(false);
  };
  const openVisibleSuccess = () => {
    setVisibleSuccess(true);
  };

  useEffect(() => {
    put(getAccount(member.accountId));
  }, []);

  useEffect(() => {
    if(account) {
      for (let facilitiesItem of account.facilities) {
        const resultMember = facilitiesItem.members ?
          facilitiesItem.members.find(memberItem => memberItem.id === parseInt(memberId))
          : null;
        const resultAccountManager = facilitiesItem.members ?
          facilitiesItem.members.find(memberItem => memberItem.permissions === MemberPermissions.Manager)
          : null;

        if (resultMember) {
          if (resultMember.avatarUrl) {
            resultMember.avatarUrl = `${resultMember.avatarUrl}?${Date.now()}`;
          }
          setMemberProfile(resultMember);
          setFacility(facilitiesItem);
        }
        if (resultAccountManager) {
          setAccountManager(resultAccountManager);
        }
        if((resultMember) && (resultAccountManager || accountManager)) {
          break;
        }
      }
    }
  }, [account]);

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  };

  const closeVisibleSubstrate = () => {
    setVisibleSubstrate(false);
  };

  const avatarData = (data, status) => ({
    text: `${data.firstName} ${data.lastName}`,
    url: data.avatarUrl,
    status: status,
  });

  return (
    <Layout title={ t('memberProfile.headerTitle') }>
      {
        !accountLoading && memberProfile && (
          <Profile>
            <Substrate visible={ visibleSubstrate } closeVisible={ closeVisibleSubstrate }>
              <MemberProfileEdit
                profile={ memberProfile }
                toggleVisibleSubstrate={ toggleVisibleSubstrate }
                openVisibleSuccess={ openVisibleSuccess }
              />
            </Substrate>
            <ProfileTop status={ status } toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ avatarData(memberProfile, status) } />
              <ProfileName>{ memberProfile.firstName } { memberProfile.lastName }</ProfileName>
              <ProfileInfo top={ true } data={ { title: t('memberProfile.facility'), text: facility.name} } />
              <ProfileInfo data={ { title: t('memberProfile.position'), text: memberProfile.position} } />
              <ProfileInfo data={ { title: t('memberProfile.email'), text: memberProfile.email} } />
              {
                accountManager && (
                  <ProfileInfo
                    data={ {
                      title: t('memberProfile.accountManager'),
                      text: `${accountManager.firstName} ${accountManager.lastName}`,
                    } }
                  />
                )
              }
            </ProfileContent>
          </Profile>
        )
      }
      <Success
        visible={ visibleSuccess }
        duration={ delayBeforeClosing }
        onClose={ closeVisibleSuccess }
        transparent={ true }
        message={ t('memberProfile.success.message') }
      />
    </Layout>
  );
};

export default MemberProfile;
