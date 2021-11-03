import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
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

import { getFacility } from '../../ducks/facility/actions';
import { getAccount } from '../../ducks/account/actions';
import { selectFacility } from '../../ducks/facility/selectors';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';

export const FacilityProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const { params: { facilityId } } = useRouteMatch();
  const member = useSelector(selectMember)
  const account = useSelector(selectAccount)
  const facility = useSelector(selectFacility)

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

  useEffect(() => {
    if (member) {
      put(getFacility({ accountId: member.accountId, facilityId: facilityId }))
      put(getAccount(member.accountId))
    }
  }, []);

  return (
    <Layout title={ t('facilityProfile.headerTitle') }>
      {
        facility && account && (
          <Profile>
            <Substrate visible={ visibleSubstrate }>
              <EditProfile />
            </Substrate>
            <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ facility.name } type='facility' />
              <ProfileName>{ facility.name }</ProfileName>
              <ProfileInfo top data={ { title: t('facilityProfile.operatingName'), text: <b>{account.operatingName}</b> } } />
              <ProfileInfo data={ { title: t('facilityProfile.address'), text: account.address} } />
              <ProfileContentBottom
                rightLink={ {
                  link: `/facility/${facility.id}/members`, text: t('facilityProfile.ProfileContentBottom.rightLink')
                }}
                />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  );
}

export default FacilityProfile;
