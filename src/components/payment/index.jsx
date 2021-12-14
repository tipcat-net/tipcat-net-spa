import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ProfileFacilityName } from '../profile/facilityName';
import { ProfileContent } from '../profile/content';
import { ProfileAvatar } from '../profile/avatar';
import { ProfileName } from '../profile/name';
import { ProfilePosition } from '../profile/position';
import { Layout } from '../ui/Layout';
import { Switch } from '../ui/Switch';
import { Input } from '../ui/Input';
import { Text } from '../ui/Text';
import { Title } from '../ui/Title';
import { Button } from '../ui/Button';
import { PaymentBottom } from './bottom';

import { createPayment, updatePayment } from '../../ducks/payment/actions';

import style from './styles.module.scss';

export const Payment = ({ payment, onChangeDisplay, currentDisplay, display }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(5);
  const [message, setMessage] = useState('');
  const [checkedServiceFee, setCheckedServiceFee] = useState(false);
  const put = useDispatch();

  const avatarData = (data) => ({
    url: data.avatarUrl,
    text: `${data.firstName} ${data.lastName}`,
  });

  const onChangeCheckedServiceFee = (e) => {
    setCheckedServiceFee(!checkedServiceFee);
  };

  const onChangeAmount = (value) => {
    let result = amount;

    if (/^[\d]*\.?[\d]{0,2}$/.test(value)) {
      result = value;
    }
    setAmount(result);
  };

  const totalAmount = () => {
    if (checkedServiceFee && parseFloat(amount)) {
      return parseFloat(amount) + payment.proFormaInvoice.serviceFee.amount;
    } else if (checkedServiceFee && !parseFloat(amount)) {
      return payment.proFormaInvoice.serviceFee.amount;
    } else {
      return amount;
    }
  };

  const onNext = () => {
    if(payment.paymentIntentId) {
      put(updatePayment({
        memberId: payment.member.id,
        paymentId: payment.paymentIntentId,
        message: message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency,
        },
      }));
    } else {
      put(createPayment({
        memberId: payment.member.id,
        message: message,
        tipsAmount: {
          amount: totalAmount(),
          currency: payment.proFormaInvoice.serviceFee.currency,
        },
      }));
    }
    onChangeDisplay('paymentMethod');
  };

  return (
    <Layout logo={ true } footer={ true }>
      <div className={ style.payment }>
        <ProfileFacilityName className={ style.paymentFacilityName }>{ payment.member.facilityName }</ProfileFacilityName>
        <div className={ style.paymentCompanyName }>{ payment.member.accountName }</div>
        <ProfileContent>
          <ProfileAvatar data={ avatarData(payment.member) } />
          <ProfileName>{ payment.member.firstName } { payment.member.lastName }</ProfileName>
          <ProfilePosition>{ payment.member.position }</ProfilePosition>
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
            <Title className={ style.paymentAmountText } currency='$ '>{ amount }</Title>
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
              strong={ true }
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
            currentDisplay={ currentDisplay }
            display={ display }
            className={ style.paymentBottom }
            left={ <Button onClick={ () => onChangeDisplay('cancel') }>{ t('pay.payment.paymentBottom.left') }</Button> }
            right={ <Button primary={ true } onClick={ onNext }>{ t('pay.payment.paymentBottom.right') }</Button> }
          />
        </ProfileContent>
      </div>
    </Layout>
  );
};