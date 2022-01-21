import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

import { MenuList } from '../menu-list';

import { authConfig } from '../../../../auth0/auth0-config';
import { ROUTES } from '../../../../constants/routes';

export const AccountMenu = ({ className }) => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  const list = [
    {
      href: ROUTES.ACCOUNT.path,
      text: t('header.accountMenu.accountProfile'),
    },
    {
      href: ROUTES.ADD_FACILITY.path,
      text: t('header.accountMenu.addFacility'),
    },
    {
      href: ROUTES.ADD_MEMBER.path,
      text: t('header.accountMenu.addMember'),
    },
    {
      href: ROUTES.TRANSACTIONS.path,
      text: t('header.accountMenu.transaction'),
    },
    {
      href: ROUTES.HOME.path,
      text: t('header.accountMenu.financialAnalityc'),
    },
    {
      href: ROUTES.SUPPORT.path,
      text: t('header.accountMenu.support'),
    },
    {
      onClick: () => logout({ returnTo: authConfig.logoutUri }),
      text: t('header.accountMenu.logout'),
    },
  ];

  return <MenuList list={ list } className={ className } />;
};
