import React from 'react';
import cn from 'classnames';

import { MyAccountsListItem } from './my-accounts-list-item';

import style from './styles.module.scss';

export const MyAccountsList = ({ list, className }) => {

  return (
    <div className={ cn(style.myAccountsList, className) }>
      {
        list && list.map(item =>
          <MyAccountsListItem key={ item.id } data={ item } />,
        )
      }
    </div>
  );
};
