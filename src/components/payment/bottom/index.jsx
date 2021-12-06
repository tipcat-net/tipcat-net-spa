import React from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const PaymentBottom = ({
    className,
    left,
    right,
    onChangeStep,
    currentStep,
    steps
  }) => {
  const stepsItem = () => {
    return steps.map((item, index) => {
      if(index === currentStep) {
        return (
          <div
            key={ `${item}_${index}` }
            className={
              cn(style.paymentBottomStepsItem, style.paymentBottomStepsItemActive)
            }
          ></div>
        )
      } else {
        return (
          <div
            key={ `${item}_${index}` }
            onClick={ () => onChangeStep(index) }
            className={ style.paymentBottomStepsItem }
          ></div>
        )
      }
    })
  }

  return (
    <div className={ cn(style.paymentBottom, className) }>
      { left ? <div className={ style.paymentBottomLeft }>{ left }</div> : null}
      <div className={ style.paymentBottomSteps }>
        { stepsItem() }
      </div>
      { right ? <div className={ style.paymentBottomRight }>{ right }</div> : null}
    </div>
  );
}
