import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStripe, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../../profile/content';
import { PaymentBottom } from '../bottom';
import { Button } from '../../ui/Button';

import { capturePayment } from '../../../ducks/payment/actions';
import { fetchers } from '../../../api';

import style from './styles.module.scss';

export const PaymentRequestButton = ({ payment, paymentRequest, onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const stripe = useStripe();

  const totalAmount = () => {
    if (payment.isServiceFee && parseFloat(payment.amount)) {
      return parseFloat(payment.amount) + payment.proFormaInvoice.serviceFee.amount;
    } else if (payment.isServiceFee && !parseFloat(payment.amount)) {
      return payment.proFormaInvoice.serviceFee.amount;
    } else {
      return payment.amount;
    }
  };

  useEffect(() => {
    paymentRequest.on('paymentmethod', async (ev) => {
      const { data } = await fetchers.createPaymentIntent({
        memberId: payment.member.id,
        message: payment.message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency,
        },
      });

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        data.clientSecret,
        { payment_method: ev.paymentMethod.id },
        { handleActions: false },
      );

      if (confirmError) {
        ev.complete('fail');
      } else {
        ev.complete('success');
        if (paymentIntent.status === 'requires_action') {
          const { error } = await stripe.confirmCardPayment(data.clientSecret);

          if (!error) {
            put(capturePayment(paymentIntent.id, onChangeDisplay('succeeded')));
          }
        } else {
          put(capturePayment(paymentIntent.id, onChangeDisplay('succeeded')));
        }
      }
    });
  });

  return (
    <ProfileContent className={ style.paymentCard }>
      {
        paymentRequest &&
          <PaymentRequestButtonElement options={ { paymentRequest } } />
      }
      <PaymentBottom
        currentDisplay={ currentDisplay }
        display={ display }
        className={ style.paymentBottom }
        left={
          <Button
            onClick={ () => onChangeDisplay('paymentMethod') }
          >{ t('pay.paymentCard.paymentBottom.left') }</Button>
        }
        right={ true }
      />
    </ProfileContent>
  );
};
