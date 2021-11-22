import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { Layout } from '../../components/ui/Layout';
import { Profile } from '../../components/profile/';
import { ProfileTop } from '../../components/profile/top';
import { ProfileContent } from '../../components/profile/content/';
import { ProfileAvatar } from '../../components/profile/avatar/';
import { ProfileName } from '../../components/profile/name/';
import { ProfileInfo } from '../../components/profile/info/';

import { Diagram } from '../../components/profile/diagram';
import { ProfileTransactions } from '../../components/profile/transactions';

import { selectMember } from '../../ducks/member/selectors';

import style from './styles.module.scss';

export const Home = () => {
  const { t } = useTranslation();
  const currentMember = useSelector(selectMember);

  const data = {
    diagram: {
      current: 78,
      max: 144
    },
    transactions: {
      count: 10
    }
  }

  return (
    <Layout title={ t('home.headerTitle') } footer>
      {
        currentMember && (
          <Profile>
            <ProfileTop />
            <ProfileContent>
              <ProfileAvatar data={ `${currentMember.firstName} ${currentMember.lastName}` } />
              <ProfileName>{ currentMember.firstName } { currentMember.lastName }</ProfileName>
              <Diagram current={ data.diagram.current } max={ data.diagram.max } />
              <ProfileTransactions count={ data.transactions.count } className={ style.profileTransactions } />
            </ProfileContent>
          </Profile>
        )
      }
    </Layout>
  )
};

export default Home;
