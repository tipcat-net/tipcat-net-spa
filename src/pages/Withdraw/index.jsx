import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/ui/Layout';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card as CardSvg } from '../../components/ui/Icons';
import { Card } from '../../components/card';
import { Label } from '../../components/ui/Label';
import { Text } from '../../components/ui/Text';
import { Title } from '../../components/ui/Title';

import style from './styles.module.scss';

export const Withdraw = () => {
  const { t, i18n } = useTranslation();
  const [sum, setSum] = useState(50);
  const [email, setEmail] = useState('nicholas.angel@gmail.com');

  const data = {
    max: 84,
    currency: 'AED',
    card: {
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

  const onChangeSum = (e) => {
    const value = e.currentTarget.value;
    let result = sum;

    if (value[0] === '.' || value[0] === ',') {
      result = `0${value}`.replace(',', '.');
    } else if (/^[\d]*(\.|\,)?[\d]{0,2}$/.test(value)) {
      result = value.replace(',', '.');
    } else {
      result = result.replace(',', '.');
    }

    if (parseFloat(result) >= data.max) {
      setSum(numberFormat.format(data.max));
    } else if (result[result.length - 1] === '.' || result[result.length - 1] === '0' || !result) {
      setSum(result);
    } else {
      setSum(numberFormat.format(parseFloat(result)));
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
        <Title className={ style.withdrawSum }>
          <span className={ style.withdrawSumCurrency }>{ renderCurrency(sum) }</span>
          <Input
            className={ style.withdrawSumInput }
            value={ sum }
            onChange={ onChangeSum }
            style={ {'--size': sum.toString().length} }
          />
          <Text size='big' className={ style.withdrawSumMax }>
            { t('withdraw.max') } <br/> { renderCurrency(sum) } <span>{ data.max }</span>
          </Text>
        </Title>
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
        >{ t('withdraw.button') }</Button>
      </div>
    </Layout>
  );
};

export default Withdraw;
