import React, { useState } from 'react';
import cn from 'classnames';

import { Button } from '../../ui/Button';
import { ArrowDown } from '../../ui/Icons';

import { MembersItem } from '../members-item';

import style from './styles.module.scss';

export const MembersUnit = ({ data }) => {
  const [visible, setVisible] = useState(data.visible);

  return (
    <div className={ cn(style.membersUnit, visible ? style.membersUnitActive : null) }>
      <div className={ style.membersUnitHeader }>
        <div className={ style.membersUnitHeaderImage }></div>
        <div className={ style.membersUnitHeaderTitle }>{ data.title }</div>
        <div className={ style.membersUnitHeaderCount }>{ data.count }</div>
        <Button clear className={ style.membersUnitHeaderArrow } onClick={ () => setVisible(!visible) }><ArrowDown className={ cn(style.icon, style.membersUnitHeaderArrowIcon) }/></Button>
      </div>
      <div className={ style.membersUnitContent }>
        {
          data.list.map((item, index) => <MembersItem key={ index } data={ item } />)
        }
      </div>
    </div>
  )
}
