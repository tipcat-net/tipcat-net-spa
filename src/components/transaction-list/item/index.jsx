import React from 'react';
import { useTranslation } from 'react-i18next';
import * as dayjs from 'dayjs';

import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { ArrowDownCircle } from '../../ui/Icons';

import style from './styles.module.scss';

export const TransactionListItem = ({ transaction }) => {
  const { t, i18n } = useTranslation();

  const formatter = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: transaction.amount.currency,
    minimumFractionDigits: 0,
  });

  return (
    <div className={ style.transactionsItem }>
      <div className={ style.transactionsItemIcon }>
        <ArrowDownCircle />
      </div>
      <Text
        size='superSmall'
        className={ style.transactionsItemTime }
      >{ dayjs(transaction.created).format('hh.mm A') }</Text>
      <Text
        size='small'
        strong={ true }
        className={ style.transactionsItemTitle }
      >{ t('transactions.types.income') }</Text>
      <Title
        level={ 2 }
        className={ style.transactionsItemSum }
      >+ { formatter.format(transaction.amount.amount) }</Title>
      {
        transaction.message ?
          <Text size='small' className={ style.transactionsItemMessage }>{ transaction.message }</Text>
          : null
      }
    </div>
  );
};
