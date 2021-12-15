import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { ArrowDownCircle } from '../../ui/Icons';

import style from './styles.module.scss';

export const TransactionsListItem = ({ transaction }) => {
  const { t } = useTranslation();
  const classType = transaction.type === 'withdraw' ? style.transactionsItemWithdraw : null;

  return (
    <div className={ cn(style.transactionsItem, classType) }>
      <div className={ style.transactionsItemIcon }>
        <ArrowDownCircle />
      </div>
      <Text
        size='small'
        strong={ true }
        className={ style.transactionsItemTitle }
      >{ t(`transactions.types.${transaction.type}`) }</Text>
      <Title
        level={ 2 }
        className={ style.transactionsItemSum }
      >{ transaction.sum }</Title>
      {
        transaction.text ?
          <Text size='small' className={ style.transactionsItemText }>{ transaction.text }</Text>
          : null
      }
    </div>
  );
};
