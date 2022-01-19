import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '../../card';
import { Button } from '../../ui/Button';
import { TrashFull } from '../../ui/Icons';

import style from './styles.module.scss';

export const MyAccountsListItem = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.myAccountsListItem }>
      <Card
        data={ data }
        button={ data.active }
        disabled={ !data.active }
      />
      <div className={ style.myAccountsListItemBottom }>
        { data.active === false ? <Button className={ style.myAccountsListItemMakeActive }>Make active</Button> : null }
        <Button
          clear={ true }
          className={ style.myAccountsListItemTrash }
        ><TrashFull /></Button>
      </div>
    </div>
  );
};
