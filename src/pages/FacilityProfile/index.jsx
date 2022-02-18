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
import { Layout } from '../../components/ui/Layout';
import { Success } from '../../components/success';

import { getAccount } from '../../ducks/account/actions';
import { selectMember } from '../../ducks/member/selectors';
import { selectAccount } from '../../ducks/account/selectors';
import { FacilityProfileEdit } from '../../components/profile/edit/facility';

export const FacilityProfile = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [facility, setFacility] = useState(null);
  const { params: { facilityId } } = useRouteMatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const delayBeforeClosing = 3000;

  const closeVisibleSuccess = () => {
    setVisibleSuccess(false);
  };
  const openVisibleSuccess = () => {
    setVisibleSuccess(true);
  };

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  };

  const closeVisibleSubstrate = () => {
    setVisibleSubstrate(false);
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
      setFacility(
        account.facilities.find(item => {
          if (item.id === parseInt(facilityId)) {
            item.avatarUrl = `${item.avatarUrl}?${Date.now()}`;

            return item;
          }
        }),
      );
    }
  }, [account]);

  return (
    <Layout title={ t('facilityProfile.headerTitle') }>
      {
        facility && (
          <Profile>
            <Substrate visible={ visibleSubstrate } closeVisible={ closeVisibleSubstrate }>
              <FacilityProfileEdit
                profile={ facility }
                toggleVisibleSubstrate={ toggleVisibleSubstrate }
                openVisibleSuccess={ openVisibleSuccess }
              />
            </Substrate>
            <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate } />
            <ProfileContent>
              <ProfileAvatar data={ avatarData() } type='facility' />
              <ProfileName>{ facility.name }</ProfileName>
              <ProfileInfo top={ true } data={ { title: t('facilityProfile.operatingName'), text: facility.operatingName } } />
              <ProfileInfo top={ facility.operatingName ? false : true } data={ { title: t('facilityProfile.address'), text: facility.address} } />
              <ProfileContentBottom
                rightLink={ {
                  link: `/facility/${facility.id}/members`, text: t('facilityProfile.ProfileContentBottom.rightLink'),
                } }
              />
            </ProfileContent>
          </Profile>
        )
      }
      <Success
        visible={ visibleSuccess }
        duration={ delayBeforeClosing }
        onClose={ closeVisibleSuccess }
        transparent={ true }
        message={ t('facilityProfile.success.message') }
      />
    </Layout>
  );
};

export default FacilityProfile;
