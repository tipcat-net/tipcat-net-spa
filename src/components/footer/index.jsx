import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { FooterMenu } from './menu';
import { Logo } from '../ui/Icons';
import { Text } from '../ui/Text';

import style from './styles.module.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={ style.footer }>
      <div className={ style.footerLogo }>
        <Logo className={ style.footerLogoIcon }/>
      </div>
      <Text size='small' className={ style.footerTitle }>{ t('footer.title') }</Text>
      <ul className={ style.footerContacts }>
        <li>
          <Trans i18nKey="footer.contacts.address" />
        </li>
        <li>
          <span>{ t('footer.contacts.phone.title') }</span>
          { t('footer.contacts.phone.text') }
        </li>
        <li>
          <span>{ t('footer.contacts.tradeLicense.title') }</span>
          { t('footer.contacts.tradeLicense.text') }
        </li>
        <li>
          <span>{ t('footer.contacts.iata.title') }</span>
          { t('footer.contacts.iata.text') }
        </li>
      </ul>
      <FooterMenu />
      <div className={ style.footerCopyright }>
        <Trans i18nKey="footer.copyright" />
      </div>
    </footer>
  );
};
