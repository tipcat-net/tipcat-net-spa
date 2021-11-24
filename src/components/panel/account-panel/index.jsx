import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileResult } from '../../profile/result';

import style from './styles.module.scss';

export const AccountPanel = ({ className }) => {
  const { t } = useTranslation();

  const data = {
    transactions: 37,
    total_sum: '$ 438',
    last_week: '+12%',
    best_result: {
      name: 'Doris Thatcher',
      result: '$81'
    }
  }

  return (
    <div className={ cn(style.accountPanel, className) }>
      <div className={ style.accountPanelResults }>
        <ProfileResult
          title={ t('accountPanel.results.transactions') }
          value={ data.transactions }
          className={ style.accountPanelResultsItem }
        />
        <ProfileResult
          title={ t('accountPanel.results.totalSum') }
          value={ data.total_sum }
          className={ style.accountPanelResultsItem }
        />
        <ProfileResult
          title={ t('accountPanel.results.lastWeek') }
          value={ data.last_week }
          className={ style.accountPanelResultsItem }
        />
      </div>
      {/* <ProfileResult
        title={ t('accountPanel.bestResult') }
        value={ data.last_week }
        className={ style.accountPanelResultsItem }
      /> */}
    </div>
  );
}
