import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { MembersActions } from '../members-actions';
import { MembersUnit } from '../members-unit';
import { MembersItem } from '../members-item';

import style from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../../../ducks/members/actions';
import { selectMembers } from '../../../ducks/members/selectors';
import { selectMember } from '../../../ducks/member/selectors';

export const MembersTabs = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const put = useDispatch();
  const member = useSelector(selectMember);
  const members = useSelector(selectMembers);

  const membersUnit = [
    {
      title: 'The World’s End',
      count: '5',
      visible: false,
      list: [
        {
          avatar: 'NA',
          name: 'Nicholas Angel',
          position: 'senior waiter'
        },
        {
          avatar: 'NA',
          name: 'Nicholas Angel',
          position: 'senior waiter'
        }
      ]
    },
    {
      title: 'The First Post',
      count: '12',
      visible: true,
      list: [
        {
          avatar: 'NA',
          name: 'Nicholas Angel',
          position: 'senior waiter'
        },
        {
          avatar: 'NA',
          name: 'Nicholas Angel',
          position: 'senior waiter'
        },
        {
          avatar: 'NA',
          name: 'Nicholas Angel',
          position: 'senior waiter'
        }
      ]
    }
  ];

  const membersAll = [
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
    {
      avatar: 'NA',
      name: 'Nicholas Angel',
      position: 'senior waiter'
    },
  ]

  return (
    <div className={ style.membersTabs }>
      <div className={ style.membersTabsHeader }>
        <div className={ cn(style.membersTabsHeaderItem, currentTab === 'unit' ? style.membersTabsHeaderItemActive : null) } onClick={ () => setCurrentTab('unit') }>Unit members</div>
        <div className={ cn(style.membersTabsHeaderItem, currentTab === 'all' ? style.membersTabsHeaderItemActive : null) } onClick={ () => setCurrentTab('all') }>All members</div>
      </div>
      <div className={ style.membersTabsContent }>
        {
          currentTab === 'unit' ? (
            <>
              <MembersActions />
              <div className={ style.membersList }>
                {
                  membersUnit.map((item, index) => (
                    <MembersUnit key={ index } data={ item } />
                  ))
                }
              </div>
            </>
          ) : (
            <>
              <MembersActions />
              <div className={ style.membersList }>
                {
                  membersAll.map((item, index) => <MembersItem key={ index } data={ item } />)
                }
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
