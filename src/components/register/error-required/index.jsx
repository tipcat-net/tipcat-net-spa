import cn from "classnames";
import { useTranslation } from "react-i18next";
import style from './styles.module.scss';

export const RegisterErrorRequired = ({ touched, errors, className }) => {
  const { t } = useTranslation();
  
  for (let key in errors) {
    if(errors[key] === 'Required' && touched) {
      return <div className={ cn(style.registerErrorRequired, className) }>{ t('registration.registerErrorRequired') }</div>
    }
  }

  return null;
}
