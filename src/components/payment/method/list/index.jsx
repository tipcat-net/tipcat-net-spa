import React from 'react';
import cn from 'classnames';

import { Button } from '../../../ui/Button';
import { Text } from '../../../ui/Text';

import style from './styles.module.scss';

export const PaymentMethotList = ({ data, onChangeMethod, paymentMethodSelected }) => (
  <div className={ style.paymentMethotList }>
    {
      data.map(item => (
        <Button
          key={ item.method }
          clear={ true }
          className={ cn(
            style.paymentMethotListItem,
            paymentMethodSelected && paymentMethodSelected.method === item.method ?
              style.paymentMethotListItemActive
              :
              null,
          ) }
          onClick={ () => onChangeMethod(item) }
          disabled={ item.disabled }
          data-method={ item.method }
        >
          <span className={ style.paymentMethotListItemIcon }>
            { item.icon }
          </span>
          {
            paymentMethodSelected && paymentMethodSelected.method === item.method ?
              <Text
                size='big'
                strong={ true }
                className={ style.paymentMethotListItemText }
              >{ item.title }</Text>
              :
              <Text
                size='small'
                className={ style.paymentMethotListItemText }
              >{ item.title }</Text>
          }
        </Button>
      ))
    }
  </div>
);
