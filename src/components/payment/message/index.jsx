import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../ui/Layout';
import { Logo } from '../../ui/Icons';
import { Title } from '../../ui/Title';
import { Button } from '../../ui/Button';

import { ROUTES } from '../../../constants/routes';

import style from './styles.module.scss';

export const PaymentMessage = ({ title, text, button }) => {
  const { t } = useTranslation();

  return (
    <Layout hiddenHeader={ true } background={ true }>
      <div className={ style.paymentMessage }>
        <div className={ style.paymentMessageContent }>
          <Logo className={ style.paymentMessageLogo } />
          {
            title ?
              <Title
                level={ 2 }
                className={ cn(
                  style.paymentMessageTitle,
                  text ? null : style.paymentMessageTitleMarginTop,
                ) }
              >{ title }</Title>
              :
              null
          }
          {
            text ?
              <Title
                level={ 3 }
                className={ style.paymentMessageText }
              >{ text }</Title>
              :
              null
          }
        </div>
        {
          button ?
            <Button white={ true } { ...button.props }>{ button.text }</Button>
            :
            null
        }
        <Button
          href={ ROUTES.ABOUT_TIPCAT.path }
          borderNone={ true }
          disabled={ true }
          className={ style.paymentMessageBottomBtn }
        >{ t('pay.paymentMessage.bottomBtn') }</Button>
      </div>
    </Layout>
  );
};
