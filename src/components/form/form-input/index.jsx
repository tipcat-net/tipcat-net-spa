import { useField } from 'formik';

import cn from 'classnames';

import { Label } from '../../ui/Label';
import { Input } from '../../ui/Input';

import style from './styles.module.scss';

export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={style.formItem}>
      <Label htmlFor={props.id || props.name} className="form-label">{label}</Label>
      <Input className={ cn('text-input', 'form-input') } error={ meta.touched && meta.error } {...field} {...props} />
      {meta.touched && meta.error && meta.error !== 'Required' ? (
        <div className="error form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};