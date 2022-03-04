import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../../profile/content';
import { PaymentBottom } from '../bottom';
import { Button } from '../../ui/Button';

import { capturePayment, createPaymentIntent, updatePaymentIntent } from '../../../ducks/payment/actions';

import style from './styles.module.scss';

export const PaymentCard = ({ payment, onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = (e) => {
    setIsComplete(e.complete);
  };

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
    if(payment.paymentIntentId) {
      put(updatePaymentIntent({
        memberId: payment.member.id,
        paymentId: payment.paymentIntentId,
        message: payment.message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency,
        },
      }));
    } else {
      put(createPaymentIntent({
        memberId: payment.member.id,
        message: payment.message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency,
        },
      }));
    }
  }, []);

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
      {
        payment.clientSecret && (
          <CardElement
            onChange={ handleComplete }
          />
        )
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
        right={
          <Button
            primary={ true }
            onClick={ handleSubmit }
            disabled={ !isComplete }
          >{ t('pay.paymentCard.paymentBottom.right') }</Button>
        }
      />
    </ProfileContent>
  );
};
