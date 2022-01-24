import React from 'react';
import cn from 'classnames';

import { Button } from '../../../ui/Button';

import style from './styles.module.scss';

export const MenuList = ({ list, className }) => (
  <ul className={ cn(style.menu, className) }>
    {
      list.map((item, index) => {
        const classIcon = item.icon ? style.menuItemIcon : null;

        return (
          <li key={ index } className={ cn(style.menuItem, classIcon) }>
            <Button
              icon={ item.icon ? item.icon : null }
              href={ item.href ? item.href : null }
              borderNone={ true }
              onClick={ item.onClick ? item.onClick : null }
            >{ item.text }</Button>
          </li>
        );
      })
    }
  </ul>
);
