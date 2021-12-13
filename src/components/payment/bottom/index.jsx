import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const PaymentBottom = ({
  className,
  left,
  right,
  currentDisplay,
  display,
}) => {
  const stepsItem = () => (
    display.map(item => {
      if(item.step) {
        return (
          <div
            key={ item.key }
            className={ cn(
              style.paymentBottomStepsItem,
              item.key === currentDisplay ? style.paymentBottomStepsItemActive : null,
            ) }
          ></div>
        );
      }

      return null;
    })
  );

  return (
    <div className={ cn(style.paymentBottom, className) }>
      { left ? <div className={ style.paymentBottomLeft }>{ left }</div> : null }
      <div className={ style.paymentBottomSteps }>
        { stepsItem() }
      </div>
      { right ? <div className={ style.paymentBottomRight }>{ right }</div> : null }
    </div>
  );
};
