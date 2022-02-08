import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { FormInput } from '../../components/form/form-input';
import { Button } from '../../components/ui/Button';
import { Home, Message, PlusSquare } from '../../components/ui/Icons';
import { Layout } from '../../components/ui/Layout';
import { Success } from '../../components/success';

import { schema } from '../../form-helpers/support/schema';
import { ROUTES } from '../../constants/routes';
import { getInitialValues } from '../../form-helpers/support/mapping';
import { selectMember } from '../../ducks/member/selectors';
import { requestSupport } from '../../ducks/support/actions';

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const Support = () => {
  const put = useDispatch();
  const { t } = useTranslation();
  const currentMember = useSelector(selectMember);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const delayBeforeClosing = 3000;

  const closeVisibleSuccess = () => {
    setVisibleSuccess(false);
  };
  const openVisibleSuccess = () => {
    setVisibleSuccess(true);
  };

  const onSubmit = (values, actions) => {
    put(requestSupport(
      { content: values.message },
      () => {
        openVisibleSuccess(),
        actions.resetForm();
      },
    ));
  };

  return (
    <Layout title={ t('support.headerTitle') }>
      <div className={ style.support }>
        <Message className={ style.supportIcon } />
        <Formik
          initialValues={ getInitialValues(initialValues, currentMember) }
          validationSchema={ schema }
          onSubmit={ onSubmit }
        >
          {
            ({
              values,
              errors,
              resetForm,
            }) => {
              const isDisabled = values.message.length === 0 || errors.message;

              const onSuccessBtnAdd = () => {
                resetForm();
                setVisibleSuccess(false);
              };

              return (
                <React.Fragment>
                  <Form>
                    <FormInput
                      label={ t('support.fields.message.label') }
                      name="message"
                      type="textarea"
                      value={ values.message }
                      className={ style.supportFormItem }
                    />
                    <FormInput
                      label={ t('support.fields.email.label') }
                      name="email"
                      type="email"
                      value={ values.email }
                      className={ style.supportFormItem }
                      disabled={ true }
                    />
                    <div className={ style.supportButtons }>
                      <Button onClick={ resetForm }>{ t('support.buttons.cancel') }</Button>
                      <Button
                        type="submit"
                        primary={ true }
                        disabled={ isDisabled }
                      >={ t('support.buttons.submit') }</Button>
                    </div>
                  </Form>
                  <Success
                    visible={ visibleSuccess }
                    duration={ delayBeforeClosing }
                    onClose={ closeVisibleSuccess }
                    message={ t('support.success.message') }
                    actionTop={
                      <Button
                        href={ ROUTES.HOME.path }
                        white={ true }
                        icon={ <Home /> }
                      >{ t('support.success.btnHome') }</Button>
                    }
                    actionBottom={
                      <Button
                        borderNone={ true }
                        className={ style.supportSuccessBtnAdd }
                        onClick={ onSuccessBtnAdd }
                        icon={ <PlusSquare /> }
                      >{ t('support.success.btnAdd') }</Button>
                    }
                  />
                </React.Fragment>
              );
            }
          }
        </Formik>
      </div>
    </Layout>
  );
};

export default Support;
