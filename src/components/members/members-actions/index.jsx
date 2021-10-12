import React from 'react';

import { Add } from '../../ui/Icons';
import { Button } from '../../ui/Button';
import { MembersSort } from '../members-sort';

import style from './styles.module.scss';

export const MembersActions = () => {

  return (
    <div className={ style.membersActions }>
      <div className={ style.membersActionsItem }>
        <Button clear className={ style.membersActionsAdd }><Add className={ style.icon } />Add member</Button>
      </div>
      <div className={ style.membersActionsItem }>
        <MembersSort />
      </div>
    </div>
  )
}