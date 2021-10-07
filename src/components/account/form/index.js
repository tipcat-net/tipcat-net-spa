import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectMember } from '../../../ducks/member/selectors';
import { getMember } from '../../../ducks/member/actions';

import { addAccount, getAccount, updateAccount } from '../../../ducks/account/actions';
import { selectAccount, selectAccountLoading } from '../../../ducks/account/selectors';

import { Button } from '../../ui/Button';

import Spinner from './../../spinner'

import { Formik, Form } from 'formik';
import { FormInput } from './../../form/form-input/';
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
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const loading = useSelector(selectAccountLoading);

  const onSubmit = (values) => {
    if(member.accountId) {
      put(updateAccount(values));
    } else {
      put(addAccount(values));
    }
  };

  useEffect(() => {
    if (!member) {
      put(getMember());
    } else if (member.accountId) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  if(loading) {
    return <Spinner />
  }
  

  return (
    <Formik
      initialValues={{...initialValues, ...account}}
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
          <FormInput
            label="Address"
            name="address"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          <FormInput
            label="Commercial name"
            name="commercialName"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.commercialName}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <FormInput
            label="Name"
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <FormInput
            label="Phone"
            name="phone"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          <Button primary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}