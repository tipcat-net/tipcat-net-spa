import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileContent } from '../profile/content';
import { ProfileAvatar } from '../profile/avatar';
import { ProfileName } from '../profile/name';
import { Switch } from '../ui/Switch';
import { Input } from '../ui/Input';
import { Text } from '../ui/Text';
import { Title } from '../ui/Title';
import { Button } from '../ui/Button';
import { PaymentBottom } from './bottom';

import { createPayment, updatePayment } from '../../ducks/payment/actions';

import style from './styles.module.scss';

export const Payment = ({ payment, onChangeStep, currentStep, steps }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(5);
  const [message, setMessage] = useState('');
  const [checkedServiceFee, setCheckedServiceFee] = useState(false);
  const put = useDispatch();

  const avatarData = (data) => ({
    url: data.avatarUrl,
    text: `${data.firstName} ${data.lastName}`
  })

  const onChangeCheckedServiceFee = (e) => {
    setCheckedServiceFee(!checkedServiceFee);
  }

  const onChangeAmount = (value) => {
    let result = amount;
    if (/^[\d]*\.?[\d]{0,2}$/.test(value)) {
      result = value;
    }
    setAmount(result);
  }

  const totalAmount = () => {
    if (checkedServiceFee && parseFloat(amount)) {
      return parseFloat(amount) + payment.proFormaInvoice.serviceFee.amount;
    } else if (checkedServiceFee && !parseFloat(amount)) {
      return 0 + payment.proFormaInvoice.serviceFee.amount;
    } else {
      return amount;
    }
  }

  const onNext = () => {
    if(payment?.paymentIntentId) {
      put(updatePayment({
        memberId: payment.member.id,
        paymentId: payment.paymentIntentId,
        message: message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency
        }
      }));
    } else {
      put(createPayment({
        memberId: payment.member.id,
        message: message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency
        }
      }));
    }
    onChangeStep(currentStep + 1);
  }

  return (
    <ProfileContent>
      <ProfileAvatar data={ avatarData(payment.member) } />
      <ProfileName>{ payment.member.firstName } { payment.member.lastName }</ProfileName>

      <Text
        size='big'
        className={ cn(style.paymentLabel, style.paymentLabelAmount) }
      >{ t('pay.payment.paymentLabelAmount') }</Text>
      <div className={ style.paymentAmount }>
        <Input
          name='amount'
          value={ amount }
          className={ style.paymentAmountInput }
          onChange={ (e) => {
            onChangeAmount(e.currentTarget.value);
          } }
        />
        <Title className={ style.paymentAmountText } currency='$ '>{amount}</Title>
      </div>
  
      <div className={ style.paymentTotal }>
        <div className={ style.paymentSwitch }>
          <Switch
            checked={ checkedServiceFee }
            onChange={ onChangeCheckedServiceFee }
          ></Switch>
          <Text
            size='small'
            className={ style.paymentSwitchText }
          >{ t('pay.payment.paymentSwitch') }</Text>
        </div>
        <Text
          size='big'
          strong
          className={ style.paymentTotalText }
        >{ t('pay.payment.paymentTotalText') } <br/> $ <span>{ totalAmount() }</span></Text>
      </div>
      
      <Text
        size='small'
        className={ style.paymentLabel }
      >{ t('pay.payment.paymentLabelMessage') }</Text>
      <Input
        name='message'
        value={ message }
        onChange={ (e) => setMessage(e.currentTarget.value) }
      />

      <PaymentBottom
        onChangeStep={ onChangeStep }
        currentStep={ currentStep }
        steps={ steps }
        className={ style.paymentBottom }
        left={ <Button>{ t('pay.payment.paymentBottom.left') }</Button> }
        right={ <Button primary onClick={ onNext }>{ t('pay.payment.paymentBottom.right') }</Button> }
      />
    </ProfileContent>
  )
}
