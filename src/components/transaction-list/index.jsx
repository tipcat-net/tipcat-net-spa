import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import cn from 'classnames';
import * as dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

import { TransactionListItem } from './item';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

import { TransactionSort } from '../../constants/TransactionSort';
import { ROUTES } from '../../constants/routes';
import { selectMember } from '../../ducks/member/selectors';
import { selectTransaction, selectTransactionParams, selectTransactionLoading } from '../../ducks/transaction/selectors';
import { getTransactions } from '../../ducks/transaction/actions';

import style from './styles.module.scss';

dayjs.extend(calendar);

export const TransactionList = ({ primary, count, className }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const transactionsParams = useSelector(selectTransactionParams);
  const transactions = useSelector(selectTransaction);
  const transactionsLoading = useSelector(selectTransactionLoading);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (count) {
      put(getTransactions({
        ...transactionsParams,
        top: count,
        filter: `memberId eq ${member.id}`,
        orderBy: TransactionSort.CreatedDESC,
      }));
    } else {
      put(getTransactions({
        filter: `memberId eq ${member.id}`,
        orderBy: TransactionSort.CreatedDESC,
      }));
    }
    setLoading(false);
  }, []);

  const groupDate = (list) => {
    const result = [];

    for (const item of list) {
      const date = dayjs(item.created).format('YYYY-MM-DD');
      const index = result.findIndex(item => item.date === date);

      if (index >= 0) {
        result[index].list.push(item);
      } else {
        result.push({
          date: date,
          list: [item],
        });
      }
    }

    return result;
  };

  if ((loading && !transactionsLoading) || (!loading && transactionsLoading)) {
    return false;
  }

  return (
    <div
      className={ cn(
        style.transactions,
        primary ? style.transactionsPrimary : null,
        className,
      ) }
    >
      {
        transactions && groupDate(transactions).map((item, index) => (
          <div key={ index } className={ style.transactionsGroup }>
            <Text
              size='small'
              className={ style.transactionsHeader }
            >
              {
                dayjs(item.date).calendar(null, {
                  sameDay: `[${t('transactions.calendar.sameDay')}], DD.MM`,
                  nextDay: 'dddd, DD.MM',
                  nextWeek: 'dddd, DD.MM',
                  lastDay: 'dddd, DD.MM',
                  lastWeek: 'dddd, DD.MM',
                  sameElse: 'dddd, DD.MM',
                })
              }
            </Text>
            <div className={ style.transactionsList }>
              {
                item.list.map((transaction, transactionIndex) => (
                  <TransactionListItem key={ transactionIndex } transaction={ transaction } />
                ))
              }
            </div>
          </div>
        ))
      }
      {
        count ? (
          <div className={ style.transactionsLast }>
            <Text
              size='superSmall'
              className={ style.transactionsLastText }
            >
              <Trans i18nKey="transactions.transactionsLast.text" count={ count }></Trans></Text>
            <Button
              borderNone={ true }
              href={ ROUTES.TRANSACTIONS.path }
              className={ style.transactionsLastBtn }
            >{ t('transactions.transactionsLast.btn') }</Button>
          </div>
        ) : null
      }
    </div>
  );
};
