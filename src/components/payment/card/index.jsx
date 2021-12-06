import React from 'react';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../../profile/content';
import { PaymentBottom } from '../bottom';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const PaymentCard = ({ onChangeStep, currentStep, steps }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <ProfileContent className={ style.paymentCard }>
      <CardElement />
      <PaymentBottom
        onChangeStep={ onChangeStep }
        currentStep={ currentStep }
        steps={ steps }
        className={ style.paymentBottom }
        left={ <Button onClick={ () => onChangeStep(currentStep - 1) }>{ t('pay.paymentCard.paymentBottom.left') }</Button> }
        right={ <Button primary onClick={ handleSubmit }>{ t('pay.paymentCard.paymentBottom.right') }</Button> }
      />
    </ProfileContent>
  )
}
