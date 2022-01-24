import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { MenuList } from '../menu-list';

import { authConfig } from '../../../../auth0/auth0-config';
import { ROUTES } from '../../../../constants/routes';
import { CreditCard, LogOut, Message, QrCode, Search, Transaction, User } from '../../../ui/Icons';

export const MemberMenu = ({ className }) => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  const list = [
    {
      icon: <User />,
      href: ROUTES.MEMBER_PROFILE,
      text: t('header.memberMenu.myProfile'),
    },
    {
      icon: <QrCode />,
      href: ROUTES.MEMBER_PROFILE_QRCODE.path,
      text: t('header.memberMenu.myQrCode'),
    },
    {
      icon: <CreditCard />,
      href: ROUTES.MYACCOUNTS.path,
      text: t('header.memberMenu.myCards'),
    },
    {
      icon: <Transaction />,
      href: ROUTES.TRANSACTIONS.path,
      text: t('header.memberMenu.transaction'),
    },
    {
      icon: <Message />,
      href: ROUTES.SUPPORT.path,
      text: t('header.memberMenu.support'),
    },
    {
      icon: <Search />,
      href: ROUTES.SEARCH.path,
      text: t('header.memberMenu.search'),
    },
    {
      icon: <LogOut />,
      onClick: () => logout({ returnTo: authConfig.logoutUri }),
      text: t('header.memberMenu.logout'),
    },
  ];

  return <MenuList list={ list } className={ className } />;
};
