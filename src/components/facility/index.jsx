import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Avatar } from '../avatar';
import { Members } from '../members';
import { Button } from '../ui/Button';
import { ArrowDown } from '../ui/Icons';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.scss';

export const Facility = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const avatarData = () => ({
    text: data.name,
    url: data.avatarUrl,
  });

  return (
    <div className={ cn(style.facility, visible ? style.facilityActive : null) }>
      <div className={ style.facilityHeader }>
        <Avatar type='facility' size='small' data={ avatarData() } />
        <div className={ style.facilityHeaderTitle }>
          <Link
            to={ ROUTES.FACILITY.getPath({ facilityId: data.id }) }
          >{ data.name }</Link>
        </div>
        <div className={ style.facilityHeaderCount }>{ data.members.length }</div>
        <Button
          clear={ true }
          className={ style.facilityHeaderArrow }
          onClick={ () => setVisible(!visible) }
        ><ArrowDown className={ style.facilityHeaderArrowIcon }/></Button>
      </div>
      <div className={ style.facilityContent }>
        <Members members={ data.members } />
      </div>
    </div>
  );
};
