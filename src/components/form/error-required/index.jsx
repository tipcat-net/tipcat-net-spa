import cn from "classnames";
import style from './styles.module.scss';

export const FormRequiredError = ({ touched, errors, message, className }) => {
  for (let key in errors) {
    if(errors[key] === 'Required' && touched[key]) {
      return <div className={ cn(style.formRequiredError, className) }>{ message }</div>
    }
  }

  return null;
}
