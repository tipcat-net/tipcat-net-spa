import React from 'react';
import { useField } from 'formik';
import { useTranslation } from "react-i18next";
import cn from 'classnames';

import { Label } from './../../../ui/Label';
import { Input, TextArea } from './../../../ui/Input';
import { UploadFile } from './../../../ui/UploadFile';
import { Button } from './../../../ui/Button';

import style from './styles.module.scss';

export const FormItem = ({ label, type, visivbleField, changeVisivbleField, ...props }) => {
  const { t } = useTranslation();
  const [field, meta] = useField(props);
  const { name } = props;
  
  const toggleVisible = () =>{
    changeVisivbleField(name);
  };
  
  return (
    <div className={ cn(style.formItem, visivbleField === name ? style.formItemVisible : null) }>
      <Label htmlFor={props.id || name} onClick={ toggleVisible }>{label}</Label>
      <div className={ cn(style.formItemFieldWrap, type === 'file' ? style.formItemFieldWrapFile : null) }>
        {
          type === 'textarea' ?
            <TextArea error={ meta.touched && meta.error } {...field} {...props} />
          :
          type === 'file' ?
            <UploadFile {...field} {...props} />
          :
            <Input error={ meta.touched && meta.error } type={ type } {...field} {...props} />
        }
        <div className={ style.formItemBtns }>
          <Button>{ t('formItem.cancel') }</Button>
          <Button type='submit' primary>{ t('formItem.save') }</Button>
        </div>
      </div>
    </div>
  );
};