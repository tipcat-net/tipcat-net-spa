import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileDiagram } from '../diagram';
import { ProfileTransactions } from '../transactions';
import { ProfileResult } from '../result';
import { Card } from '../../card';
import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const PersonalPanel = ({ data, className }) => {
  const { t } = useTranslation();

  return (
    <div className={ cn(style.personalPanel, className) }>
      <ProfileDiagram current={ data.diagram.current } max={ data.diagram.max } />
      <div className={ style.personalPanelTotals }>
        <ProfileResult
          title={ t('personalPanel.totals.transactions') }
          value={ data.total_transactions }
          className={ style.personalPanelTotalsItem }
        />
        <ProfileResult
          title={ t('personalPanel.totals.earned') }
          value={ data.total_earned }
          className={ style.personalPanelTotalsItem }
        />
      </div>
      <ProfileTransactions count className={ style.personalPanelTransactions } />
      <div className={ style.personalPanelPaymentAccount }>
        <Text
          size='small'
          className={ style.personalPanelPaymentAccountTitle }
        >{ t('personalPanel.paymentAccountTitle') }</Text>
        <Card data={ data.card } className={ style.personalPanelPaymentAccountCard } />
      </div>
    </div>
  );
}
