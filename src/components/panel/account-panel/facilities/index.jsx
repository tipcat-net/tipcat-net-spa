import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../../ui/Text';
import { Facility } from '../../../facility';

import style from './styles.module.scss';

export const AccountPanelFacilities = ({ facilities }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.accountPanelFacilities }>
      <Text
        size="small"
        strong={ true }
        className={ style.accountPanelFacilitiesHeader }
      >{ t('accountPanel.facilities') }</Text>
      { facilities.map(({amount, ...facility}) =>
        <Facility
          key={ facility.id }
          data={ {...facility, amount} }
        />,
      ) }
    </div>
  );
};
