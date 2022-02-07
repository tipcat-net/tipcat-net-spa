import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/card';
import { Label } from '../../components/ui/Label';
import { Title } from '../../components/ui/Title';

import { ReactComponent as CardSvg } from './svg/card.svg';

import style from './styles.module.scss';

export const Withdraw = () => {
  const { t, i18n } = useTranslation();
  const [sum, setSum] = useState(50);
  const [email, setEmail] = useState('nicholas.angel@gmail.com');
  const withdrawSumInputRef = useRef(null);

  const data = {
    max: 84,
    currency: 'AED',
    card: {
      type: 'card',
      number: '11112222333344443456',
      date: '10/2024',
      name: 'NICHOLAS ANGEL',
    },
  };

  const numberFormat = new Intl.NumberFormat(i18n.language, {
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const currencyFormat = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: data.currency,
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const renderCurrency = (value) => {
    return currencyFormat.format(value).replace(numberFormat.format(value), '').replace(' ', '');
  };

  const onFocusSum = (e) => {
    if (e.target !== withdrawSumInputRef.current) {
      withdrawSumInputRef.current.focus();
    }
  };

  const onChangeSum = (value) => {
    value = value.toString().replace(',', '.');

    if (!/^[\d]*(\.|\,)?[\d]{0,2}$/.test(value)) {
      return;
    }

    if (parseFloat(value) >= data.max) {
      setSum(data.max);
    } else if (value[0] === '.' || (value[0] === value[1] && value[1] === '0')) {
      setSum('0.');
    } else if (value[value.length - 1] === '.' || (value[value.length - 1] === '0') || !value) {
      setSum(value);
    } else {
      setSum(parseFloat(value));
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <Layout title={ t('withdraw.headerTitle') }>
      <div className={ style.withdraw }>
        <div className={ style.withdrawImage }>
          <CardSvg className={ style.withdrawImageIcon }/>
        </div>
        <Label className={ style.withdrawLabel }>{ t('withdraw.labels.sum') }</Label>
        <div
          className={ style.withdrawSum }
          onFocus={ onFocusSum }
          tabIndex={ -1 }
        >
          <Title className={ style.withdrawSumCurrency }>{ renderCurrency(sum) }</Title>
          <input
            className={ style.withdrawSumInput }
            value={ sum }
            onChange={ (e) => onChangeSum(e.currentTarget.value) }
            style={ {'--size': sum.toString().length} }
            ref={ withdrawSumInputRef }
          />
        </div>
        <Button
          className={ style.withdrawBtnMax }
          borderNone={ true }
          onClick={ () => onChangeSum(data.max) }
        >{ t('withdraw.max') } { renderCurrency(sum) }<span className={ style.withdrawBtnMaxNumber }>{ data.max }</span></Button>
        <Label className={ style.withdrawLabel }>{ t('withdraw.labels.account') }</Label>
        <Card
          data={ data.card }
          className={ style.withdrawCard }
          button={ false }
        />
        <Label className={ style.withdrawLabel }>{ t('withdraw.labels.email') }</Label>
        <Input
          className={ style.withdrawInput }
          value={ email }
          type='email'
          onChange={ onChangeEmail }
        />
        <Button
          primary={ true }
          className={ style.withdrawButton }
          disabled={ !sum || parseFloat(sum) <= 0 }
        >{ t('withdraw.button') }</Button>
      </div>
    </Layout>
  );
};

export default Withdraw;
