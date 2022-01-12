import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileResult } from '../../profile/result';
import { AccountPanelFacilities } from './facilities';
import { Button } from '../../ui/Button';
import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const AccountPanel = ({ className }) => {
  const { t } = useTranslation();

  const data = {
    transactions: 37,
    total_sum: '$ 438',
    last_week: '+12%',
    best_result: {
      name: 'Doris Thatcher',
      value: '$81',
    },
  };

  return (
    <div className={ cn(style.accountPanel, className) }>
      <div className={ style.accountPanelPadding }>
        <Button
          className={ style.accountPanelBtnAccount }
        >{ t('accountPanel.btnAccount') }</Button>
        <div className={ style.accountPanelResults }>
          <ProfileResult
            title={ t('accountPanel.results.transactions') }
            value={ data.transactions }
            className={ cn(style.accountPanelResultsItem, style.accountPanelResultsItemTransactions) }
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
        <div className={ style.accountPanelBestResult }>
          <Text
            size='small'
            className={ style.accountPanelBestResultTitle }
          >{ t('accountPanel.bestResult') }</Text>
          <Text
            size='big'
            className={ style.accountPanelBestResultContent }
          >
            { data.best_result.name }
            <span>{ data.best_result.value }</span>
          </Text>
        </div>
        <div className={ style.accountPanelBtns }>
          <Button>{ t('accountPanel.buttons.facilitys') }</Button>
          <Button>{ t('accountPanel.buttons.members') }</Button>
        </div>
      </div>
      <AccountPanelFacilities/>
    </div>
  );
};
