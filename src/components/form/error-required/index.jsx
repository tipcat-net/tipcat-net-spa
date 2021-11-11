import cn from "classnames";
import style from './styles.module.scss';

export const FormErrorRequired = ({ touched, errors, message, className }) => {
  for (let key in errors) {
    if(errors[key] === 'Required' && touched) {
      return <div className={ cn(style.formErrorRequired, className) }>{ message }</div>
    }
  }

  return null;
}
