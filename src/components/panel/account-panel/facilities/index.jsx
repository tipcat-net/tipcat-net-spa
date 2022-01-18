import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from '../../../ui/Text';
import { Facility } from '../../../facility';

import { selectMember } from '../../../../ducks/member/selectors';
import { getFacilities } from '../../../../ducks/facility/actions';
import { selectFacilities } from '../../../../ducks/facility/selectors';

import style from './styles.module.scss';

export const AccountPanelFacilities = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const facilities = useSelector(selectFacilities);

  useEffect(() => {
    put(getFacilities(member.accountId));
  }, []);

  if (!facilities) {
    return null;
  }

  return (
    <div className={ style.accountPanelFacilities }>
      <Text
        size="small"
        strong={ true }
        className={ style.accountPanelFacilitiesHeader }
      >{ t('accountPanel.facilities') }</Text>
      { facilities.map(({facility, amount}) =>
        <Facility
          key={ facility.id }
          data={ {...facility, amount} }
        />,
      ) }
    </div>
  );
};
