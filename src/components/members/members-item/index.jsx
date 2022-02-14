import React from 'react';

import { useMemberStatus } from '../../../hooks/memberStatus';
import { Avatar } from '../../avatar';
import { MembersItemActions } from './actions';

import style from './styles.module.scss';

export const MembersItem = ({ data }) => {
  const status = useMemberStatus(data);

  const avatarData = (data, status) => ({
    text: `${data.firstName} ${data.lastName}`,
    url: data.avatarUrl,
    status: status,
  });

  return (
    <div className={ style.membersItem }>
      <Avatar type="active" data={ avatarData(data, status) } />
      <div className={ style.membersItemInfo }>
        <div className={ style.membersItemName }>{ data.firstName } { data.lastName }</div>
        <div className={ style.membersItemPosition }>{ data.position }</div>
      </div>
      <MembersItemActions member={ data } />
    </div>
  );
};
