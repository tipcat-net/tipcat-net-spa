import React from 'react';
import cn from 'classnames';

import { ProfileTransactionsItem } from './item';

import style from './styles.module.scss';

export const ProfileTransactions = ({ count, className }) => {
  const list = [
    {
      date: 'Today, 12.09',
      list: [
        {
          type: 'refill',
          title: "Income tips",
          sum: "+$4"
        },
        {
          type: 'refill',
          title: "Income tips",
          text: "Thanks for a great evening)",
          sum: "+$4"
        },
        {
          type: 'write-off',
          title: "Withdraw to card",
          sum: "–$168,5"
        }
      ]
    },
    {
      date: 'Monday, 11.09',
      list: [
        {
          type: 'refill',
          title: "Income tips",
          sum: "+$4"
        },
        {
          type: 'refill',
          title: "Income tips",
          text: "You are best in the f*ng town!",
          sum: "+$3"
        },
        {
          type: 'refill',
          title: "Income tips",
          text: "Thank you",
          sum: "+$10"
        },
      ]
    }
  ]

  return (
    list.map(item => (
      <div className={ cn(style.transactions, className) }>
        <div className={ style.transactionsHeader }>{ item.date }</div>
        <div className={ style.transactionsList }>
          { item.list.map(transaction => <ProfileTransactionsItem transaction={ transaction } />) }
        </div>
      </div>
    ))
  )
}
