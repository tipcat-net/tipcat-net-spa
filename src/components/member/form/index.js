import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMember, updateMember } from '../../../ducks/member/actions';
import { selectMember, selectMemberLoading } from '../../../ducks/member/selectors';

import Spinner from './../../spinner';

import { Formik, Form } from 'formik';
import { FormInput } from './../../form/form-input/'
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required().default(''),
  lastName: yup.string().required().default(''),
  email: yup.string().email().required().default(''),
});

const initialValues = schema.cast({});

export const MemberForm = () => {
  const put = useDispatch();
  const member = useSelector(selectMember);
  const loading = useSelector(selectMemberLoading);

  useEffect(() => {
    put(getMember());
  }, []);

  if(loading) {
    return <Spinner />
  }

  return (
    <Formik
      initialValues={{...initialValues, ...member}}
      validationSchema={schema}
      onSubmit={(values) => {
        if (member) {
          put(updateMember(values));
        }
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
              <FormInput
                label="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <FormInput
                label="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )
        }
      }
    </Formik>
  )
}