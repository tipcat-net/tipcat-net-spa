import { useField } from 'formik';

import cn from 'classnames';

import { Label } from '../../ui/Label';
import { Input, TextArea } from '../../ui/Input';
import { UploadFile } from '../../ui/UploadFile';

import style from './styles.module.scss';

export const FormInput = ({ label, type, className, ...props }) => {
  const [{value, ...field}, meta] = useField(props);

  return (
    <div className={ cn(style.formItem, className) }>
      { label ? (
        <Label
          htmlFor={ props.id || props.name }
          required={ props.required }
        >
          { label }
        </Label>
      ) : null }
      {
        type === 'textarea' ?
          <TextArea error={ meta.touched && meta.error } value={ value } { ...field } { ...props } />
          : type === 'file' ?
            <UploadFile
              { ...field }
              { ...props }
            />
            :
            <Input error={ meta.touched && meta.error } type={ type } value={ value } { ...field } { ...props } />
      }
    </div>
  );
};
