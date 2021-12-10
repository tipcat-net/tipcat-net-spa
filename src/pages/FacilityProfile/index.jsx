import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useTranslation } from 'react-i18next';

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

export const FacilityProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const [facility, setFacility] = useState(null);
  const { params: { facilityId } } = useRouteMatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  };

  const avatarData = () => ({
    text: facility.name,
    url: facility.avatarUrl,
  });

  useEffect(() => {
    put(getAccount(member.accountId));
  }, []);

  useEffect(() => {
    if(account) {
      setFacility(account.facilities.find(item => item.id === parseInt(facilityId)));
    }
  }, [account]);

  return (
    <Layout title={ t('facilityProfile.headerTitle') }>
      {
        facility && (
          <Profile>
            <Substrate visible={ visibleSubstrate }>
              <EditProfile />
            </Substrate>
            <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ avatarData() } type='facility' />
              <ProfileName>{ facility.name }</ProfileName>
              <ProfileInfo top={ true } data={ { title: t('facilityProfile.operatingName'), text: <b>{ account.operatingName }</b> } } />
              <ProfileInfo data={ { title: t('facilityProfile.address'), text: account.address} } />
              <ProfileContentBottom
                rightLink={ {
                  link: `/facility/${facility.id}/members`, text: t('facilityProfile.ProfileContentBottom.rightLink'),
                } }
              />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
};

export default FacilityProfile;
