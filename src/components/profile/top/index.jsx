import React from 'react';

import { Status } from '../../status';
import { Button } from '../../ui/Button';
import { Edit } from '../../ui/Icons';

import style from './styles.module.scss';

export const ProfileTop = ({ toggleVisibleSubstrate, status }) => {
  return (
    <div className={ style.profileTop }>
      {
        status ?
          <Status status={ status } className={ style.profileTopStatus } />
          : null
      }
      <Button
        borderNone={ true }
        className={ style.profileTopBtnEdit }
        onClick={ toggleVisibleSubstrate }
        icon={ <Edit className={ style.profileTopBtnEditIcon } /> }
      ></Button>
    </div>
  );
};
