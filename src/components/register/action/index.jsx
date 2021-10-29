import cn from 'classnames';
import { useTranslation } from "react-i18next";

import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const RegisterAction = ({ currentStep, back, next, touched, errors, className }) => {
  const { t } = useTranslation();

  for (let key in errors) {
    if(errors[key] === 'Required') {
      return <div className={style.errorRequired}>Please add the required information</div>
    }
  }

  return (
    <div className={ cn(style.registerAction, className) }>
      <div className={ style.registerActionButtonWrap }>
        {
          currentStep === "account" ?
            <Button
              outline
              onClick={ back }
            >{ t('registration.buttons.back') }</Button> 
          : 
            null
        }
      </div>
      <div className={ style.registerPoints }>
        <Button
          clear
          className={ cn(style.registerPoint, currentStep === "member" ? style.registerPointActive : null) }
          onClick={ back }
        ></Button>
        <Button
          clear
          className={ cn(style.registerPoint, currentStep === "account" ? style.registerPointActive : null) }
          onClick={ next }
        ></Button>
      </div>
      <div className={ style.registerActionButtonWrap }>
        { 
          currentStep === "member" ? 
            <Button
              outline
              disabled={ touched.member && !errors.member ? false : true }
              primary={ touched.member && !errors.member ? true : false }
              onClick={ next }
            >{ t('registration.buttons.next') }</Button>
          : 
            <Button
              type="submit"
              outline
              disabled={ touched.account && !errors.account ? false : true }
              primary={ touched.account && !errors.account ? true : false }
            >{ t('registration.buttons.submit') }</Button>
        }
      </div>
    </div>
  );
}
