import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Button } from '../../ui/Button';
import { AccountMenu } from './account-menu';
import { MemberMenu } from './member-menu';

import { useComponentUnderCursor } from '../../../hooks/useComponentUnderCursor';
import { ROUTES } from '../../../constants/routes';

import style from './styles.module.scss';

export const Menu = ({ open, history, onClose }) => {
  const { t } = useTranslation();
  const {
    ref,
    isComponentUnderCursor,
    setIsComponentUnderCursor,
  } = useComponentUnderCursor(false);

  useEffect(() => {
    if (open) {
      setIsComponentUnderCursor(true);
    }
  }, [open]);

  useEffect(() => {
    if (open && !isComponentUnderCursor) {
      onClose();
    }
  }, [isComponentUnderCursor]);

  return (
    <div
      ref={ ref }
      className={ cn(style.menuWrapper, open ? style.menuWrapperOpen : null) }
    >
      {
        history.location.pathname === ROUTES.ACCOUNT.path ?
          <AccountMenu />
          : <MemberMenu />
      }
      <div className={ style.menuBottom }>
        <Button
          href={ ROUTES.PRIVACY_POLICY.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.privacyPolicy') }</Button>
        <Button
          href={ ROUTES.TERMS_CONDITIONS.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.termsConditions') }</Button>
        <Button
          href={ ROUTES.ABOUT_TIPCAT.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.AboutTipCat') }</Button>
      </div>
    </div>
  );
};

export default Menu;
