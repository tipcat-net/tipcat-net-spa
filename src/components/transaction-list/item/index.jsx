import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { ArrowDownCircle } from '../../ui/Icons';

import { Currency } from '../../../constants/Currency';

import style from './styles.module.scss';

export const TransactionListItem = ({ transaction }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.transactionsItem }>
      <div className={ style.transactionsItemIcon }>
        <ArrowDownCircle />
      </div>
      <Text
        size='small'
        strong={ true }
        className={ style.transactionsItemTitle }
      >{ t('transactions.types.income') }</Text>
      <Title
        level={ 2 }
        className={ style.transactionsItemSum }
      >+{ transaction.amount.amount } { Currency[transaction.amount.currency] }</Title>
      {
        transaction.message ?
          <Text size='small' className={ style.transactionsItemText }>{ transaction.message }</Text>
          : null
      }
    </div>
  );
};
