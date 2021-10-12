import React, { useState } from 'react';
import cn from 'classnames';

import { Add, ArrowDown, Clock, Max, Min, Position, Status } from '../../ui/Icons';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const MembersTabs = () => {
  const [currentTab, setCurrentTab] = useState('all');

  return (
    <div className={ style.membersTabs }>
      <div className={ style.membersTabsHeader }>
        <div className={ cn(style.membersTabsHeaderItem, currentTab === 'unit' ? style.membersTabsHeaderItemActive : null) } onClick={ () => setCurrentTab('unit') }>Unit members</div>
        <div className={ cn(style.membersTabsHeaderItem, currentTab === 'all' ? style.membersTabsHeaderItemActive : null) } onClick={ () => setCurrentTab('all') }>All members</div>
      </div>
      <div className={ style.membersTabsActions }>
        <div className={ style.membersTabsActionsItem }>
          <Button clear ><Add />Add member</Button>
        </div>
        <div className={ style.membersTabsActionsItem }>
          <div className={ style.membersSort }>
            <div className={ style.membersSortSelected }><Clock />Last tipped<ArrowDown /></div>
            <ul className={ style.membersSortList }>
              <li className={ style.membersSortListItem }>
                <button className={ style.membersSortListItemBtn }><Clock />Last tipped</button>
              </li>
              <li className={ style.membersSortListItem }>
                <button className={ style.membersSortListItemBtn }><Max />Max tips</button>
              </li>
              <li className={ style.membersSortListItem }>
                <button className={ style.membersSortListItemBtn }><Min />Min tips</button>
              </li>
              <li className={ style.membersSortListItem }>
                <button className={ style.membersSortListItemBtn }><Position />Position</button>
              </li>
              <li className={ style.membersSortListItem }>
                <button className={ style.membersSortListItemBtn }><Status />Status</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={ style.membersTabsContent }>
        {
          currentTab === 'unit' ? (
            <h1>unit</h1>
          ) : (
            <h1>all</h1>
          )
        }
      </div>
    </div>
  )
}