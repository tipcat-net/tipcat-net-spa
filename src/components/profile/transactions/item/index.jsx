import React from 'react';
import cn from 'classnames';

import { ArrowDownCircle } from '../../../ui/Icons';

import style from './styles.module.scss';

export const ProfileTransactionsItem = ({ transaction }) => {
  const classType = transaction.type === 'write-off' ? style.transactionsItemWriteOff : null;

  return (
    <div className={ cn(style.transactionsItem, classType) }>
      <div className={ style.transactionsItemIcon }>
        <ArrowDownCircle />
      </div>
      <div className={ style.transactionsItemTitle }>{ transaction.title }</div>
      <div className={ style.transactionsItemSum }>{ transaction.sum }</div>
      { transaction.text ? <div className={ style.transactionsItemText }>{ transaction.text }</div> : null }
    </div>
  )
}
