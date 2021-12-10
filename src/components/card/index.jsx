import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Card as CardIcon, Hide, Show } from '../ui/Icons';

import style from './styles.module.scss';

export const Card = ({ data, className }) => {
  const { t } = useTranslation();
  const [visibleNumber, setVisibleNumber] = useState(false);

  const toggleVisibleNumber = () => {
    setVisibleNumber(!visibleNumber);
  };

  const transformNumber = (number) => number.replace(/\d{4}/g, (match, offset) => {
    if (offset === 16) {
      return match;
    }
    if (visibleNumber) {
      return `${match}   `;
    } else {
      return '• • • •   ';
    }
  });

  return (
    <div className={ cn(style.card, className) }>
      <CardIcon className={ style.cardIconCard }/>
      <div className={ style.cardNumberWrap }>
        <Text size='big' className={ style.cardNumber }>{ transformNumber(data.number) }</Text>
        <Button
          clear={ true }
          className={ style.cardBtnView }
          onClick={ toggleVisibleNumber }
        >
          { visibleNumber ? <Hide /> : <Show /> }
        </Button>
      </div>
      <Text size='small' className={ style.cardDate }>{ data.date }</Text>
      <Text size='small' className={ style.cardName }>{ data.name }</Text>
      <Button primary={ true } className={ style.cardBtn }>{ t('card.btn') }</Button>
    </div>
  );
};
