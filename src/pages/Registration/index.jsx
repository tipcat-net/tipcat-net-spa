import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/ui/Button";
import { ErrorRequired } from "../../components/register/error-required";

import { getMember } from './../../ducks/member/actions';
import { selectMember, selectMemberLoading } from './../../ducks/member/selectors';

import { signUp } from './../../ducks/app/actions';

import style from './styles.module.scss';

import { Formik, Form } from "formik";
import { FormInput } from "../../components/form/form-input";

import * as yup from 'yup';
import Spinner from "../../components/spinner";

const schema = yup.object().shape({
  member: yup.object({
    firstName: yup.string().required('Required').default(''),
    lastName: yup.string().required('Required').default(''),
    email: yup.string().email().required('Required').default(''),
  }),
  account: yup.object({
    address: yup.string().required('Required').default(''),
    commercialName: yup.string().required('Required').default(''),
    email: yup.string().required('Required').email().default(''),
    //name: yup.string().required('Required').default(''),
    phone: yup.string().required('Required').default(''),
  }),
});

const initialValues = schema.cast({});

export const Registration = () => {
  const put = useDispatch();
  const member = useSelector(selectMember);
  const loading = useSelector(selectMemberLoading);
  const [ currentStep, setCurrentStep ] = useState('member');
  const [ validateStep, setValidateStep ] = useState({
    member: false,
    account: false
  });

  useEffect(() => {
    put(getMember());
  }, []);

  const back = () => {
    setCurrentStep('member');
  };

  const next = () => {
    if (validateStep.member) {
      console.log('validateStep.member', validateStep.member)
      setCurrentStep('account');
    }
  };

  const onSubmit = (values) => {
    console.log('register', values);
    put(signUp(values));
  }

  const steps = {
    member: {
      key: 'member',
      title: 'Hallo!',
      underTitle: 'Introduce youreself',
    },
    account: {
      key: 'account',
      underTitle: 'Introduce your company',
    }
  }

  if(loading || !member) {
    return <Spinner />
  }

  return (
    <div className={ style.register }>
      <Formik
        initialValues={{ ...initialValues, member }}
        validationSchema={schema}
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

            errors.member ? validateStep.member = false : validateStep.member = true;
            errors.account ? validateStep.account = false : validateStep.account = true;

            return (
              <Form>
                {
                  currentStep === "member"
                  ? 
                    <>
                      <div className={ style.registerLogo }>
                        <img src="logo.svg" alt="tipcat" />
                      </div>
                      <div className={ style.registerTitle }>Hallo!</div>
                      <div className={ style.registerUnderTitle }>Introduce youreself</div>
                      <FormInput
                        label="Your name*"
                        name="member.firstName"
                        type="text"
                        value={values.member.firstName}
                      />
                      <FormInput
                        label="Your surname*"
                        name="member.lastName"
                        type="text"
                        value={values.member.lastName}
                      />
                      <FormInput
                        label="Your e-mail*"
                        name="member.email"
                        type="text"
                        value={values.member.email}
                      />

                      <ErrorRequired errors={ errors.member } />
                    </>
                  : 
                    <>
                      <div className={ style.registerUnderTitle }>Introduce your company</div>
                      <FormInput
                        label="Comapany name*"
                        name="account.commercialName"
                        type="text"
                        value={values.account.commercialName}
                      />
                      <FormInput
                        label="Comapany adress*"
                        name="account.address"
                        type="text"
                        value={values.account.address}
                      />
                      <FormInput
                        label="Comapany e-mail"
                        name="account.email"
                        type="text"
                        value={values.account.email}
                      />
                      <FormInput
                        label="Comapany phone"
                        name="account.phone"
                        type="text"
                        value={values.account.phone}
                      />

                      <ErrorRequired errors={ errors.account } />
                    </>
                }

                <div className={ style.registerAction }>
                  <div className={ style.registerActionButtonWrap }>
                    { currentStep === "account" ? <Button onClick={ back }>Back</Button> : null }
                  </div>
                  <div className={ style.registerPoints }>
                    <button onClick={ back }></button>
                    <button onClick={ next }></button>
                  </div>
                  <div className={ style.registerActionButtonWrap }>
                    { currentStep === "member" ? <Button onClick={ next } primary>Next</Button> : <Button type="submit" primary>Register</Button> }
                  </div>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default Registration;