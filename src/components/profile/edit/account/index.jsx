import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { FormItem } from '../form-item'
import { EditProfile } from '../';

import { Button } from '../../../ui/Button';
import { schema } from '../../../../form-helpers/account-edit/schema';

export const AccountProfileEdit = () => {
  const { t } = useTranslation();
  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState('');
  
  const changeVisivbleField = (e) => setVisivbleField(e);

  // const field = [
  //   {
  //     label: 'Input label',
  //     name: 'input',
  //     type: 'text',
  //   },
  //   {
  //     label: 'Textarea label',
  //     name: 'textarea',
  //     type: 'textarea',
  //   },
  //   {
  //     label: 'Avatar label',
  //     name: 'avatar',
  //     type: 'file',
  //   },
  //   {
  //     label: 'Email label',
  //     name: 'email',
  //     type: 'email',
  //   }
  // ]

  const onSubmit = (value) => {
    console.log('onSubmit', value);
  }

  return (
    <EditProfile >
      <Formik
        initialValues={ {...initialValues} }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
            console.log('errors', errors);
            return (
              <Form>
                {/* {
                  field.map(item => (
                    <FormItem
                      key={ item.name }
                      label={ item.label }
                      name={ item.name }
                      type={ item.type }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                      value={ values[item.name] }
                      visivbleField={ visivbleField }
                      changeVisivbleField={changeVisivbleField}
                    />
                  ))
                } */}
                <FormItem
                  label={ t('accountProfile.edit.fields.operatingName.label') }
                  name="operatingName"
                  type="text"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.avatar.label') }
                  name="avatar"
                  type="file"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.address.label') }
                  name="address"
                  type="textarea"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.email.label') }
                  name="email"
                  type="text"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.phone.label') }
                  name="phone"
                  type="text"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.name.label') }
                  name="name"
                  type="text"
                  visivbleField={ visivbleField }
                  changeVisivbleField={ changeVisivbleField }
                />
              </Form>
            )
          }
        }
      </Formik>
    </EditProfile>
  )
}
