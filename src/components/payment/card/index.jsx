import React from 'react';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../../profile/content';
import { PaymentBottom } from '../bottom';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const PaymentCard = ({ onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if(!error) {
      onChangeDisplay('succeeded');
    }
  };

  return (
    <ProfileContent className={ style.paymentCard }>
      <CardElement />
      <PaymentBottom
        onChangeDisplay={ onChangeDisplay }
        currentDisplay={ currentDisplay }
        display={ display }
        className={ style.paymentBottom }
        left={ <Button onClick={ () => onChangeDisplay('payment') }>{ t('pay.paymentCard.paymentBottom.left') }</Button> }
        right={ <Button primary onClick={ handleSubmit }>{ t('pay.paymentCard.paymentBottom.right') }</Button> }
      />
    </ProfileContent>
  )
}
