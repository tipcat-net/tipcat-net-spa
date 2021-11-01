import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";

import { RegisterAction } from "../../components/register/action";
import { RegisterErrorRequired } from "../../components/register/error-required";
import Spinner from "../../components/spinner";

import { ROUTES } from "../../constants/routes";

import { FormInput } from "../../components/form/form-input";
import { schema } from "../../form-helpers/registration/schema";

import { getMember } from './../../ducks/member/actions';
import { selectMember, selectMemberLoading } from './../../ducks/member/selectors';
import { signUp } from './../../ducks/app/actions';

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const Registration = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const loading = useSelector(selectMemberLoading);
  const [ currentStep, setCurrentStep ] = useState('member');

  useEffect(() => {
    put(getMember());
  }, []);

  if (member && member.accountId) {
    return (
      <Redirect
        to={ ROUTES.HOME.path }
      />
    )
  }

  const back = () => {
    setCurrentStep('member');
  };

  const next = () => {
    setCurrentStep('account');
  };

  const onSubmit = (values) => {
    put(signUp(values));
  }

  if(loading || !member) {
    return <Spinner />
  }

  return (
    <div className={ style.register }>
      <Formik
        initialValues={ { ...initialValues, member: member } }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            touched
          }) => {
            return (
              <Form>
                {
                  currentStep === "member"
                  ? 
                    <>
                      <div className={ style.registerLogo }>
                        <img src="logo.svg" alt="tipcat" />
                      </div>
                      <div className={ style.registerTitle }>{ t('registration.form.member.title') }</div>
                      <div className={ style.registerUnderTitle }>{ t('registration.form.member.underTitle') }</div>
                      <FormInput
                        label={ t('registration.form.member.fields.firstName.label') }
                        name="member.firstName"
                        type="text"
                        value={ values.member.firstName }
                        className={ style.registerInputBold }
                        required
                      />
                      <FormInput
                        label={ t('registration.form.member.fields.lastName.label') }
                        name="member.lastName"
                        type="text"
                        value={ values.member.lastName }
                        required
                      />
                      <RegisterErrorRequired
                        touched={ touched.member }
                        errors={ errors.member }
                        className={ style.registerErrorRequiredVisible }
                      />
                    </>
                  : 
                    <>
                      <div className={ style.registerUnderTitle }>{ t('registration.form.account.underTitle') }</div>
                      <FormInput
                        label={ t('registration.form.account.fields.operatingName.label') }
                        name="account.operatingName"
                        type="text"
                        value={ values.account.operatingName }
                        className={ style.registerInputBold }
                        required
                      />
                      <FormInput
                        label={ t('registration.form.account.fields.address.label') }
                        name="account.address"
                        type="textarea"
                        value={ values.account.address }
                        required
                      />
                      <FormInput
                        label={ t('registration.form.account.fields.name.label') }
                        name="account.name"
                        type="text"
                        value={ values.account.name }
                        required
                      />
                      <div className={ style.registerOr }>
                        <FormInput
                          label={ t('registration.form.account.fields.email.label') }
                          name="account.email"
                          type="text"
                          value={ values.account.email }
                          className={ style.registerOrItem }
                        />
                        <span className={ style.registerOrText }>• <br /> or <br /> •</span>
                        <FormInput
                          label={ t('registration.form.account.fields.phone.label') }
                          name="account.phone"
                          type="text"
                          value={ values.account.phone }
                          className={ style.registerOrItem }
                        />
                      </div>
                      <RegisterErrorRequired
                        touched={ touched.account }
                        errors={ errors.account }
                        className={ style.registerErrorRequiredVisible }
                      />
                    </>
                }
                <RegisterAction
                  currentStep={ currentStep }
                  back={ back }
                  next={ next }
                  touched={ touched }
                  errors={ errors }
                  className={ style.registerActionMarginTop }
                />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default Registration;
