import React, { useState } from 'react';
import cn from 'classnames';

import { Avatar } from '../avatar';
import { Members } from '../members';
import { Button } from '../ui/Button';
import { ArrowDown } from '../ui/Icons';

import style from './styles.module.scss';

export const Facility = ({ data }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={ cn(style.facility, visible ? style.facilityActive : null) }>
      <div className={ style.facilityHeader }>
        <Avatar type='facility' size='small' data={ data.name } />
        <div className={ style.facilityHeaderTitle }>{ data.name }</div>
        <div className={ style.facilityHeaderCount }>{ data.members.length }</div>
        <Button clear className={ style.facilityHeaderArrow } onClick={ () => setVisible(!visible) }><ArrowDown className={ style.facilityHeaderArrowIcon }/></Button>
      </div>
      <div className={ style.facilityContent }>
        <Members members={ data.members } />
      </div>
    </div>
  )
}