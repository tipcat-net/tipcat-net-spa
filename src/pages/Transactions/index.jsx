import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { TransactionList } from '../../components/transaction-list';

import style from './styles.module.scss';

export const Transactions = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('transactions.headerTitle') }>
      <TransactionList primary={ true } className={ style.transactions }/>
    </Layout>
  );
};

export default Transactions;
