import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { ProfileContent } from '../../components/profile/content';
import { ProfileAvatar } from '../../components/profile/avatar';
import { ProfileName } from '../../components/profile/name';

import { getPreparePayment, createPayment } from '../../ducks/payment/actions';
import { selectPayment } from '../../ducks/payment/selectors';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const Pay = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  const { params: { memberCode } } = useRouteMatch();
  const payment = useSelector(selectPayment);
  const put = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    put(getPreparePayment(memberCode));
  }, []);

  const next = (amount, payment) => {
    console.log('next', {
      memberId: payment.member.id,
      tipsAmount: {
        amount: amount,
        currency: 'NotSpecified',
      },
    });
    // put(createPayment({
    //   memberId: payment.member.id,
    //   tipsAmount: {
    //     amount: amount,
    //     currency: "NotSpecified"
    //   }
    // }));
  };

  // const tipsAmount = {
  //   amount: 0,
  //   currency: "NotSpecified"
  // }

  console.log('memberCode', memberCode);
  console.log('payment', payment);

  const avatarData = (data) => ({
    url: data.avatarUrl,
    text: `${data.firstName} ${data.lastName}`,
  });

  if (!payment) {
    return null;
  }

  return (
    <Layout logo={ true } footer={ true }>
      <Elements stripe={ stripePromise }>
        <ProfileContent>
          {
            currentStep === 0 ?
              <React.Fragment>
                <ProfileAvatar data={ avatarData(payment.member) } />
                <ProfileName>{ payment.member.firstName } { payment.member.lastName }</ProfileName>
                <div>
                  <input value={ amount } onChange={ (e) => {
                    setAmount(e.currentTarget.value);
                  } } />
                </div>
                <div>
                  <input value={ message } onChange={ (e) => {
                    setMessage(e.currentTarget.value);
                  } } />
                </div>
                <div>
                  <Button>No thanks</Button>
                  <Button primary={ true } onClick={ () => next(amount, payment) }>Next</Button>
                </div>
              </React.Fragment>
              : currentStep === 1 ?
                <div>1</div>
                :
                <div>2</div>
          }
        </ProfileContent>
      </Elements>
    </Layout>
  );
};

export default Pay;
