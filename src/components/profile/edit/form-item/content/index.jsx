import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import { Input, TextArea } from '../../../../ui/Input';
import { UploadFile } from '../../../../ui/UploadFile';
import { Button } from '../../../../ui/Button';

import style from './styles.module.scss';

export const FormItemContent = ({ onCancel, ...props }) => {
  const { t } = useTranslation();
  const [{value, ...field}, meta] = useField(props);
  const { type, name } = props;

  return (
    <div className={ cn(style.formItemContent, type === 'file' ? style.formItemContentFile : null) }>
      {
        type === 'textarea' ?
          <TextArea error={ meta.touched && meta.error } value={ value } { ...field } { ...props } />
          : type === 'file' ?
            <UploadFile
              { ...field }
              { ...props }
            />
            :
            <Input error={ meta.touched && meta.error } value={ value } { ...field } { ...props } />
      }
      <div className={ style.formItemBtns }>
        <Button onClick={ () => onCancel(name) }>{ t('formItem.cancel') }</Button>
        <Button type='submit' primary={ true }>{ t('formItem.save') }</Button>
      </div>
    </div>
  );
};
