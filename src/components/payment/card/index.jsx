import React from 'react';
import { useDispatch } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../../profile/content';
import { PaymentBottom } from '../bottom';
import { Button } from '../../ui/Button';

import { capturePayment } from '../../../ducks/payment/actions';

import style from './styles.module.scss';

export const PaymentCard = ({ payment, onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmCardPayment(payment.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (!error) {
      put(capturePayment(payment.paymentIntentId, onChangeDisplay('succeeded')));
    }
  };

  return (
    <ProfileContent className={ style.paymentCard }>
      <CardElement />
      <PaymentBottom
        currentDisplay={ currentDisplay }
        display={ display }
        className={ style.paymentBottom }
        left={ <Button onClick={ () => onChangeDisplay('paymentMethod') }>{ t('pay.paymentCard.paymentBottom.left') }</Button> }
        right={ <Button primary={ true } onClick={ handleSubmit }>{ t('pay.paymentCard.paymentBottom.right') }</Button> }
      />
    </ProfileContent>
  );
};
