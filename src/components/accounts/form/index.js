import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addAccount } from './../../../ducks/accounts/actions';

import { Formik, Form } from 'formik';
import { Input } from './../../form/input/';
import * as yup from 'yup';

const schema = yup.object().shape({
  address: yup.string().required().default(''),
  commercialName: yup.string().default(''),
  email: yup.string().email().default(''),
  name: yup.string().required().default(''),
  phone: yup.string().required().default(''),
});

const initialValues = schema.cast({});

export const AccountForm = () => {
  const put = useDispatch()

  const onSubmit = useCallback((values) => {
    put(addAccount(values));
  }, []);

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ schema }
      onSubmit={ onSubmit }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <Input
            label="Address"
            name="address"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          <Input
            label="Commercial name"
            name="commercialName"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.commercialName}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Input
            label="Name"
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}