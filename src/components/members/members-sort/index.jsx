import React, { useState } from 'react';
import cn from 'classnames';

import { ArrowDown, Clock, Max, Min, Position, Status } from '../../ui/Icons';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const MembersSort = () => {
  const [visibleList, setVisibleList] = useState(false);
  const [currentSort, setCurrentSort] = useState('last');

  const onToggleVisibleList = () => setVisibleList(!visibleList);

  const sortList = [
    {
      key: 'last',
      render: <><Clock className={ style.icon }/>Last tipped</>
    },
    {
      key: 'max',
      render: <><Max className={ style.icon }/>Max tips</>
    },
    {
      key: 'min',
      render: <><Min className={ style.icon }/>Min tips</>
    },
    {
      key: 'position',
      render: <><Position className={ style.icon }/>Position</>
    },
    {
      key: 'status',
      render: <><Status className={ style.icon }/>Status</>
    }
  ];

  const onChangeSort = (key) => {
    setCurrentSort(key);
    onToggleVisibleList();
  }

  const findSort = () => {
    return sortList.find(item => item.key === currentSort);
  }

  return (
    <div className={ style.membersSort }>
      <Button clear className={ style.membersSortSelected } onClick={ onToggleVisibleList }>
        { findSort().render }<ArrowDown className={ style.icon }/>
      </Button>
      <ul className={ cn(style.membersSortList, visibleList ? style.membersSortListVisible : null) }>
        {
          sortList.map(item => (
            <li key={ item.key } className={ cn(style.membersSortListItem, currentSort === item.key ? style.membersSortListItemActive : null) }>
              <Button clear className={ style.membersSortListItemBtn } onClick={ () => onChangeSort(item.key) }>{ item.render }</Button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}