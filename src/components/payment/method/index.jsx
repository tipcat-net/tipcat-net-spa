import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useStripe } from '@stripe/react-stripe-js';

import { ProfileContent } from '../../profile/content';
import { PaymentMethotList } from './list';
import { PaymentBottom } from '../bottom';
import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';

import card from './list/images/card.png';
import { ReactComponent as ApplePaySvg } from './list/svg/applePay.svg';
import { ReactComponent as CardSvg } from './list/svg/card.svg';
import { ReactComponent as GooglePaySvg } from './list/svg/googlePay.svg';
import { ReactComponent as SamsungPaySvg } from './list/svg/samsungPay.svg';

import style from './styles.module.scss';
import { ProfileFacilityName } from '../../profile/facilityName';

export const PaymentMethod = ({ payment, setPaymentRequest, availablePaymentMethods, addPaymentMethod, onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const paymentMethodList = [
    {
      method: 'applePay',
      icon: <ApplePaySvg />,
      title: t('pay.paymentMethod.list.applePay.title'),
      description: t('pay.paymentMethod.list.applePay.description'),
      disabled: true,
    },
    {
      method: 'card',
      icon: <CardSvg />,
      title: t('pay.paymentMethod.list.card.title'),
      description: (
        <React.Fragment>
          <img src={ card } alt=''/>
          <Trans i18nKey='pay.paymentMethod.list.card.description' />
        </React.Fragment>
      ),
      disabled: true,
    },
    {
      method: 'googlePay',
      icon: <GooglePaySvg />,
      title: t('pay.paymentMethod.list.googlePay.title'),
      description: t('pay.paymentMethod.list.googlePay.description'),
      disabled: true,
    },
    {
      method: 'samsungPay',
      icon: <SamsungPaySvg />,
      title: t('pay.paymentMethod.list.samsungPay.title'),
      description: t('pay.paymentMethod.list.samsungPay.description'),
      disabled: true,
    },
  ];

  const onChangeMethod = (value) => {
    setPaymentMethodSelected(value);
  };

  const nextDispaly = () => {
    onChangeDisplay(paymentMethodSelected.method);
  };

  const checkList = (list, availablePaymentMethods) => {
    return paymentMethodList.map(item => {
      if (availablePaymentMethods[item.method]) {
        return {
          ...item,
          disabled: false,
        };
      } else {
        return item;
      }
    });
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
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'AE',
        currency: payment.proFormaInvoice.serviceFee.currency.toLowerCase(),
        total: {
          label: 'Tips left at FP RESTAURANTS Inc',
          amount: totalAmount() * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then(result => {
        if (result) {
          addPaymentMethod(result);
          setPaymentRequest(pr);
        }
        setLoading(true);
      });
    }
  }, [stripe]);

  return (
    <div className={ style.paymentMethod }>
      <ProfileFacilityName>{ payment.member.facilityName }</ProfileFacilityName>
      <ProfileContent className={ style.paymentMethodContent }>
        <Text size='big' className={ style.paymentMethodText }>{ t('pay.paymentMethod.text') }</Text>
        {
          loading &&
            <PaymentMethotList
              data={ checkList(paymentMethodList, availablePaymentMethods) }
              onChangeMethod={ onChangeMethod }
              paymentMethodSelected={ paymentMethodSelected }
            />
        }
        <div className={ style.paymentMethodDescription }>
          { paymentMethodSelected ? paymentMethodSelected.description : null }
        </div>
        <PaymentBottom
          currentDisplay={ currentDisplay }
          display={ display }
          className={ style.paymentBottom }
          left={
            <Button
              onClick={ () => onChangeDisplay('payment') }
            >{ t('pay.paymentMethod.paymentBottom.left') }</Button>
          }
          right={
            <Button
              primary={ true }
              onClick={ nextDispaly }
              disabled={ !paymentMethodSelected }
            >{ t('pay.paymentMethod.paymentBottom.right') }</Button>
          }
        />
      </ProfileContent>
    </div>
  );
};
