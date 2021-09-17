import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMember } from './../../../ducks/members/actions';
import { selectMembers, selectMembersLoading } from './../../../ducks/members/selectors';

import Spinner from './../../spinner';

import { Formik, Form } from 'formik';
import { Input } from './../../form/input/'
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required().default(''),
  lastName: yup.string().required().default(''),
  email: yup.string().email().required().default(''),
});

const initialValues = schema.cast({});

export const MemberForm = () => {
  const put = useDispatch();
  const member = useSelector(selectMembers);
  const loading = useSelector(selectMembersLoading);

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
      // onSubmit={(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}
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
              <Input
                label="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <Input
                label="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <Input
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