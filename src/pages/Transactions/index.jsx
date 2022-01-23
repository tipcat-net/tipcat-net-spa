import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { TransactionList } from '../../components/transaction-list';
import { Sort } from '../../components/sort';
import { Clock, DiaDown, DiaHigh } from '../../components/ui/Icons';

import { TransactionSort } from '../../constants/TransactionSort';
import { changeParamsTransactions } from '../../ducks/transaction/actions';
import { selectTransactionLastPage, selectTransactionLoading, selectTransactionParams } from '../../ducks/transaction/selectors';

import style from './styles.module.scss';

export const Transactions = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const scrollRef = useRef(null);
  const transactionsParams = useSelector(selectTransactionParams);
  const transactionsLoading = useSelector(selectTransactionLoading);
  const transactionsLastPage = useSelector(selectTransactionLastPage);

  const sortList = [
    {
      value: TransactionSort.CreatedASC,
      icon: <Clock />,
      text: t('transactions.sortList.createdASC'),
    },
    {
      value: TransactionSort.CreatedDESC,
      icon: <Clock />,
      text: t('transactions.sortList.createdDESC'),
    },
    {
      value: TransactionSort.AmountASC,
      icon: <DiaHigh />,
      text: t('transactions.sortList.amountASC'),
    },
    {
      value: TransactionSort.AmountDESC,
      icon: <DiaDown />,
      text: t('transactions.sortList.amountDESC'),
    },
  ];

  const onToggleSelected = (value) => {
    put(changeParamsTransactions({
      skip: 0,
      orderBy: value,
    }));
  };

  const scrollHandler = () => {
    if (!transactionsLastPage) {
      const scrollDifference = scrollRef.current.scrollHeight - scrollRef.current.clientHeight - scrollRef.current.scrollTop;

      if (scrollDifference < 100 && !transactionsLoading) {
        put(changeParamsTransactions({
          skip: transactionsParams.skip + transactionsParams.top,
        }));
      }
    }
  };

  return (
    <Layout title={ t('transactions.headerTitle') }>
      <div className={ style.transactions }>
        <Sort
          data={ {
            selected: transactionsParams.orderBy,
            list: sortList,
          } }
          onToggleSelected={ onToggleSelected }
        />
        <div
          ref={ scrollRef }
          className={ style.transactionsScroll }
          onScroll={ scrollHandler }
        >
          <TransactionList primary={ true } />
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
