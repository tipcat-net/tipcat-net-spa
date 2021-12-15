import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { TransactionsList } from '../../components/transactions-list';

import style from './styles.module.scss';

export const Transactions = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('transactions.headerTitle') }>
      <TransactionsList primary={ true } className={ style.transactions }/>
    </Layout>
  );
};

export default Transactions;
