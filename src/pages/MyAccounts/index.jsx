import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Layout } from '../../components/ui/Layout';
import { Title } from '../../components/ui/Title';
import { MyAccountsList } from '../../components/my-accounts-list';

import style from './styles.module.scss';

export const MyAccounts = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      type: 'card',
      number: '11112222333344443456',
      date: '10/2024',
      name: 'NICHOLAS ANGEL',
      active: true,
    },
    {
      id: 1,
      type: 'card',
      number: '11112222333344445661',
      date: '10/2024',
      name: 'NICHOLAS ANGEL',
      active: false,
    },
    {
      id: 2,
      type: 'citybank',
      number: '098039485098095403476856',
      name: 'NICHOLAS ANGEL',
      active: false,
    },
  ];

  return (
    <Layout title={ t('myAccounts.headerTitle') } footer={ true }>
      <div className={ style.myAccounts }>
        <Title
          level={ 2 }
          className={ style.myAccountsTitle }
        >Active account</Title>
        <MyAccountsList
          list={ data.filter(item => item.active) }
        />
        <Title
          level={ 2 }
          className={ cn(style.myAccountsTitle, style.myAccountsTitleOtherAccounts) }
        >Other accounts</Title>
        <MyAccountsList
          list={ data.filter(item => !item.active) }
        />
      </div>
    </Layout>
  );
};

export default MyAccounts;
