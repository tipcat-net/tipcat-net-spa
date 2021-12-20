import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { TransactionListItem } from './item';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.scss';

export const TransactionList = ({ primary, count, className }) => {
  const { t } = useTranslation();

  const transactions = [
    {
      date: 'Today, 12.09',
      list: [
        {
          type: 'income',
          sum: '+$4',
        },
        {
          type: 'income',
          text: 'Thanks for a great evening)',
          sum: '+$4',
        },
        {
          type: 'withdraw',
          sum: '–$168,5',
        },
      ],
    },
    {
      date: 'Monday, 11.09',
      list: [
        {
          type: 'income',
          sum: '+$4',
        },
        {
          type: 'income',
          text: 'You are best in the f*ng town!',
          sum: '+$3',
        },
        {
          type: 'income',
          text: 'Thank you',
          sum: '+$10',
        },
      ],
    },
  ];

  return (
    <div
      className={ cn(
        style.transactions,
        primary ? style.transactionsPrimary : null,
        className,
      ) }
    >
      {
        transactions.map((item, index) => (
          <div key={ index } className={ style.transactionsGroup }>
            <Text size='small' className={ style.transactionsHeader }>{ item.date }</Text>
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
            >{ t('transactions.transactionsLast.text') }</Text>
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