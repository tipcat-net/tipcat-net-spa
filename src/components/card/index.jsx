import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Hide, Show } from '../ui/Icons';
import { ReactComponent as CardIcon } from './svg/card.svg';
import { ReactComponent as BlankIcon } from './svg/blank.svg';

import style from './styles.module.scss';

export const Card = ({ data, className, button, disabled }) => {
  const { t } = useTranslation();
  const [visibleNumber, setVisibleNumber] = useState(false);
  const classNoButton = button === false ? style.cardNoButton : null;
  const classDisabled = disabled ? style.cardDisabled : null;

  const toggleVisibleNumber = () => {
    setVisibleNumber(!visibleNumber);
  };

  const transformNumber = (number) => number.replace(/\d{4}/g, (match, offset) => {
    if (offset === 16) {
      return match;
    }

    const render = visibleNumber ? match : '• • • •';

    if (offset === 12) {
      return `${render}  `;
    } else {
      return `${render}   `;
    }
  });

  return (
    <div className={ cn(style.card, classNoButton, classDisabled, className) }>
      {
        data.type === 'card' ?
          <CardIcon className={ cn(style.cardIcon, style.cardIconCard) }/>
          : <BlankIcon className={ cn(style.cardIcon, style.cardIconBlank) }/>
      }
      <div className={ style.cardNumberWrap }>
        <Text
          size='big'
          className={ style.cardNumber }
        >{ data.type === 'card' ? transformNumber(data.number) : data.number }</Text>
        {
          data.type === 'card' ?
            <Button
              clear={ true }
              className={ style.cardBtnView }
              onClick={ toggleVisibleNumber }
              icon={ visibleNumber ? <Hide /> : <Show /> }
            ></Button>
            : null
        }
      </div>
      {
        data.type === 'card' ?
          <Text size='small' className={ style.cardDate }>{ data.date }</Text>
          : <Text size='small' className={ style.cardType }>{ t(`card.type.${data.type}`) }</Text>
      }
      <Text size='small' className={ style.cardName }>{ data.name }</Text>
      { button && <Button primary={ true } className={ style.cardBtn }>{ t('card.btn') }</Button> }
    </div>
  );
};
