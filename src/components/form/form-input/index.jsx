import { useField } from 'formik';

import cn from 'classnames';

import { Label } from '../../ui/Label';
import { Input, TextArea } from '../../ui/Input';

import style from './styles.module.scss';

export const FormInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={style.formItem}>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      {
        type === 'textarea' ?
          <TextArea error={ meta.touched && meta.error } {...field} {...props} />
        :
          <Input error={ meta.touched && meta.error } type={ type } {...field} {...props} />
      }
    </div>
  );
};