import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Layout } from '../../components/ui/Layout';
import { PaymentCard } from '../../components/payment/card';
import { Payment } from '../../components/payment';

import { getPayment } from '../../ducks/payment/actions';
import { selectPayment } from '../../ducks/payment/selectors';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const Pay = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { params: { memberCode } } = useRouteMatch();
  const steps = ['payment', 'card'];
  const payment = useSelector(selectPayment);
  const put = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    put(getPayment(memberCode));
  }, []);

  const onChangeStep = (value) => {
    setCurrentStep(value);
  };

  if (!payment) {
    return null;
  }

  return (
    <Layout logo={ true } footer={ true }>
      <Elements stripe={ stripePromise }>
        {
          currentStep === 0 ?
            <Payment
              payment={ payment }
              onChangeStep={ onChangeStep }
              currentStep={ currentStep }
              steps={ steps }
            />
            : currentStep === 1 ?
              <PaymentCard
                onChangeStep={ onChangeStep }
                currentStep={ currentStep }
                steps={ steps }
              />
              :
              <div>2</div>
        }
      </Elements>
    </Layout>
  );
};

export default Pay;
