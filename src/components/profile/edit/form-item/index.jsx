import React from 'react';

import { Label } from './../../../ui/Label';
import { FormItemContent } from './content';

import style from './styles.module.scss';

export const FormItem = ({ label, visivbleField, toggleVisivbleField, ...props }) => {
  const { name } = props;

  return (
    <div className={ style.formItem }>
      <Label
        htmlFor={ props.id || name }
        onClick={ () => toggleVisivbleField(name) }
      >{ label }</Label>
      {
        visivbleField === name ?
          <FormItemContent { ...props } />
          : null
      }
    </div>
  );
};
