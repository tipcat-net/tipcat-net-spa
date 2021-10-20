import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormItem } from './form-item'
import * as yup from 'yup';

import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const EditProfile = ({ visible }) => {
  const schema = yup.object().shape({
    input: yup.string().required().default(''),
    textarea: yup.string().required().default(''),
    avatar: yup.string().required().default(''),
    email: yup.string().email().required().default(''),
  });

  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState('');
  
  const changeVisivbleField = (e) => setVisivbleField(e);

  const field = [
    {
      label: 'Input label',
      name: 'input',
      type: 'text',
    },
    {
      label: 'Textarea label',
      name: 'textarea',
      type: 'textarea',
    },
    {
      label: 'Avatar label',
      name: 'avatar',
      type: 'file',
    },
    {
      label: 'Email label',
      name: 'email',
      type: 'email',
    }
  ]

  return (
    <div className={ style.editProfile }>
      <div className={ style.editProfileTitle }>Edit</div>
      <Formik
        initialValues={{...initialValues}}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log('onSubmit', values);
        }}
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
            return (
              <Form>
                {
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
                }
              </Form>
            )
          }
        }
      </Formik>
    </div>
  );
}

export default EditProfile;
