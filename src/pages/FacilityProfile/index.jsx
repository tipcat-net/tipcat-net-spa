import { useState } from 'react';
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

import style from './styles.module.scss';

export const FacilityProfile = () => {
  const { t } = useTranslation();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);

  const toggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  }

  const facility = {
    id: 0,
    name: "The First Post",
    accountId: 0
  }

  const account = {
    id: 0,
    address: "1401 Constitution Ave NW Washington, DC 20230",
    commercialName: "FP RESTAURANTS Inc.",
    email: "firstpostrest@gmail.com",
    isActive: true,
    name: "string",
    phone: "+1 843 2332 34"
  }

  return (
    <Layout title={ t('facilityProfile.headerTitle') }>
      <Profile>
        <Substrate visible={ visibleSubstrate }>
          <EditProfile />
        </Substrate>
        <ProfileTop toggleVisibleSubstrate={ toggleVisibleSubstrate }>
          <div className={ style.memberProfileStatus }>active</div>
        </ProfileTop>
        <ProfileContent>
          <ProfileAvatar data={ facility.name } type='facility' />
          <ProfileName>{ facility.name }</ProfileName>
          <ProfileInfo top data={ { title: "Legal entity", text: <b>${account.commercialName}</b> } } />
          <ProfileInfo data={ { title: "Adress", text: account.address} } />
          <ProfileContentBottom
            rightLink={ {
              link: '/', text: t('facilityProfile.ProfileContentBottom.rightLink')
            }}
            />
        </ProfileContent>
      </Profile>
    </Layout>
  );
}

export default FacilityProfile;
