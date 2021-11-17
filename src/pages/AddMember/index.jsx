import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { Layout } from '../../components/ui/Layout';
import { FormInput } from '../../components/form/form-input';
import { FormRequiredError } from '../../components/form/error-required';
import { Button } from '../../components/ui/Button';
import { Home, Add } from '../../components/ui/Icons';
import { Success } from '../../components/success';

import { ROUTES } from '../../constants/routes';
import { schema } from '../../form-helpers/add-member/schema';
import { getInitialValues } from '../../form-helpers/add-member/mapping';

import { selectMember } from '../../ducks/member/selectors';
import { addMember } from '../../ducks/member/actions';

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const AddMember = () => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);

  const closeSuccess = () => setVisibleSuccess(true);

  const onSubmit = (values) => {
    put(addMember(values, closeSuccess));
  }

  return (
    <Layout hiddenHeader>
      <Formik
        initialValues={ getInitialValues(initialValues, member) }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            touched,
            resetForm,
          }) => {
            const onSuccessBtnAdd = () => {
              resetForm();
              setVisibleSuccess(false);
            }

            return (
              <>
                <div className={ style.create }>
                  <div className={ style.createTitle }>{ t('addMember.title') }</div>
                  <Form>
                    <FormInput
                      label={ t('addMember.fields.firstName.label') }
                      name="firstName"
                      type="text"
                      value={ values.firstName }
                      className={ style.registerInputBold }
                      required
                    />
                    <FormInput
                      label={ t('addMember.fields.lastName.label') }
                      name="lastName"
                      type="text"
                      value={ values.lastName }
                      required
                    />
                    <FormInput
                      label={ t('addMember.fields.email.label') }
                      name="email"
                      type="email"
                      checked={ values.email }
                      required
                    />
                    {
                      errors ?
                        <FormRequiredError
                          touched={ touched }
                          errors={ errors }
                          message={ t('addMember.formRequiredError') }
                          className={ style.createError }
                        /> 
                      : 
                        null
                    }
                    <div className={ style.createButtons }>
                      <Button>{ t('addMember.buttons.back') }</Button>
                      <Button type='submit' primary>{ t('addMember.buttons.submit') }</Button>
                    </div>
                  </Form>
                </div>
                <Success
                  visible={ visibleSuccess }
                  actionTop={
                    <Button
                      transparent
                      className={ style.createSuccessBtnHome }
                      href={ ROUTES.HOME.path }
                    >
                      <Home className={ style.createSuccessBtnHomeIcon } />{ t('addMember.success.btnHome') }
                    </Button>
                  }
                  message={ t('addMember.success.message') }
                  actionBottom={
                    <Button
                      clear
                      className={ style.createSuccessBtnAdd }
                      onClick={ onSuccessBtnAdd }
                    >
                      <Add className={ style.createSuccessBtnAddIcon } />{ t('addMember.success.btnAdd') }
                    </Button>
                  }
                />
              </>
            )
          }
        }
      </Formik>
    </Layout>
  )
}

export default AddMember;
