import style from './styles.module.scss';

export const ErrorRequired = ({ errors }) => {
  for (let key in errors) {
    if(errors[key] === 'Required') {
      return <div className={style.errorRequired}>Please add the required information</div>
    }
  }
  return null;
}

export default ErrorRequired;