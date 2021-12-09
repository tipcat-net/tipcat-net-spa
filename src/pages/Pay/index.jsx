import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Trans, useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { PaymentCard } from '../../components/payment/card';
import { Payment } from '../../components/payment';
import { PaymentMessage } from '../../components/payment/message';

import { getPayment } from '../../ducks/payment/actions';
import { selectPayment } from '../../ducks/payment/selectors';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const Pay = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const { params: { memberCode } } = useRouteMatch();
  const payment = useSelector(selectPayment);
  const [currentDisplay, setCurrentDisplay] = useState('payment');
  const display = [
    {
      key: 'payment',
      step: true,
    },
    {
      key: 'card',
      step: true,
    },
    {
      key: 'succeeded',
    },
    {
      key: 'cancel',
    },
  ];

  useEffect(() => {
    put(getPayment(memberCode));
  }, []);

  const onChangeDisplay = (value) => {
    setCurrentDisplay(value);
  };

  if (!payment) {
    return null;
  }

  switch(currentDisplay) {
    case 'payment':
      return (
        <Layout logo={ true } footer={ true }>
          <Payment
            payment={ payment }
            onChangeDisplay={ onChangeDisplay }
            currentDisplay={ currentDisplay }
            display={ display }
          />
        </Layout>
      );

    case 'card':
      return (
        <Layout logo={ true } footer={ true }>
          <Elements stripe={ stripePromise }>
            <PaymentCard
              onChangeDisplay={ onChangeDisplay }
              currentDisplay={ currentDisplay }
              display={ display }
            />
          </Elements>
        </Layout>
      );

    case 'succeeded':
      return (
        <PaymentMessage
          title={ t('pay.paymentSucceeded.title') }
          text={ <Trans i18nKey="pay.paymentSucceeded.text" /> }
          button={ {
            text: t('pay.paymentSucceeded.button'),
            props: {
              onClick: () => window.close(),
            },
          } }
        />
      );

    case 'cancel':
      return (
        <PaymentMessage
          title={ t('pay.paymentCancel.title') }
          button={ {
            text: t('pay.paymentCancel.button'),
            props: {
              onClick: () => onChangeDisplay('payment'),
            },
          } }
        />
      );

    default:
      return null;
  }
};

export default Pay;
