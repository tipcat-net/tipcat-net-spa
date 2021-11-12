import React from 'react';

import { Status } from '../../status';
import { Button } from '../../ui/Button';
import { Pen } from '../../ui/Icons';

import style from './styles.module.scss';

export const ProfileTop= ({ toggleVisibleSubstrate, status }) => {
  return (
    <div className={ style.profileTop }>
      { status ? <Status status={ status } /> : null }
      <Button
        clear
        className={ style.profileTopBtnEdit }
        onClick={ toggleVisibleSubstrate }>
        <Pen className={ style.profileTopBtnEditIcon } />
      </Button>
    </div>
  )
}
