import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from "react-i18next";

import { ArrowDown, Max, Min, Position, Status, NameAsc, NameDesc, Time } from '../../ui/Icons';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const MembersSort = () => {
  const { t } = useTranslation();
  const [visibleList, setVisibleList] = useState(false);
  const [currentSort, setCurrentSort] = useState('lastTipped');

  const onToggleVisibleList = () => setVisibleList(!visibleList);

  const sortList = [
    {
      key: 'lastTipped',
      render: <><Time className={ style.icon }/>{ t('memberSort.lastTipped') }</>
    },
    {
      key: 'tipsDesc',
      render: <><Max className={ style.icon }/>{ t('memberSort.tipsDesc') }</>
    },
    {
      key: 'tipsAcs',
      render: <><Min className={ style.icon }/>{ t('memberSort.tipsAcs') }</>
    },
    {
      key: 'position',
      render: <><Position className={ style.icon }/>{ t('memberSort.position') }</>
    },
    {
      key: 'status',
      render: <><Status className={ style.icon }/>{ t('memberSort.status') }</>
    },
    {
      key: 'nameAsc',
      render: <><NameAsc className={ style.icon }/>{ t('memberSort.nameAsc') }</>
    },
    {
      key: 'nameDesc',
      render: <><NameDesc className={ style.icon }/>{ t('memberSort.nameDesc') }</>
    },
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
