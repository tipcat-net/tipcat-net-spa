import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { Profile } from '../../components/profile/';
import { ProfileTop } from '../../components/profile/top';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfilePosition } from '../../components/profile/position';
import { PersonalPanel } from '../../components/profile/personal-panel';


import { Panel } from '../../components/panel';
import { AccountPanel } from '../../components/panel/account-panel';

import { selectMember } from '../../ducks/member/selectors';

import style from './styles.module.scss';

export const Home = () => {
  const { t } = useTranslation();
  const currentMember = useSelector(selectMember);

  const data = {
    diagram: {
      current: 78,
      max: 144,
    },
    card: {
      number: '11112222333344443456',
      date: '10/2024',
      name: 'NICHOLAS ANGEL',
    },
    total_transactions: 132,
    total_earned: '$ 438',
  };

  const avatarData = (data) => ({
    text: `${data.firstName} ${data.lastName}`,
    url: data.avatarUrl,
  });

  return (
    <Layout title={ t('home.headerTitle') } footer={ true }>
      {
        currentMember && currentMember.permissions === 'Employee' ? (
        // currentMember && currentMember.permissions === 'Manager' ? (
          <Profile>
            <ProfileTop />
            <ProfileContent>
              <ProfileAvatar data={ avatarData(currentMember) } />
              <ProfileName>{ currentMember.firstName } { currentMember.lastName }</ProfileName>
              <ProfilePosition>{ currentMember.position }</ProfilePosition>
              <PersonalPanel data={ data } className={ style.homeEmployeePersonalPanel } />
            </ProfileContent>
          </Profile>
        ) : currentMember && currentMember.permissions === 'Manager' ? (
          <Profile>
            <ProfileTop />
            <ProfileContent>
              <ProfileAvatar
                data={ `${currentMember.firstName} ${currentMember.lastName}` }
                className={ style.homeAvatar }
              />
              <ProfileName>{ currentMember.firstName } { currentMember.lastName }</ProfileName>
              <ProfilePosition>administrator</ProfilePosition>
            </ProfileContent>
            <div className={ style.homePanels }>
              <Panel title='Personal panel' className={ style.homePanelsItem }>
                <PersonalPanel data={ data } className={ style.homePersonalPanel } />
              </Panel>
              <Panel title='Account panel' className={ style.homePanelsItem }>
                <AccountPanel data={ data } className={ style.homePccountPanel } />
              </Panel>
            </div>
          </Profile>
        ) : null
      }
    </Layout>
  );
};

export default Home;
