import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { FormInput } from '../../components/form/form-input';
import { Button } from '../../components/ui/Button';
import { Message } from '../../components/ui/Icons';
import { Layout } from '../../components/ui/Layout';

import { schema } from '../../form-helpers/support/schema';

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const Support = () => {
  const { t } = useTranslation();

  const onSubmit = (values) => {
    console.log('onSubmit', values);
  };

  return (
    <Layout title={ t('support.headerTitle') }>
      <div className={ style.support }>
        <Message className={ style.supportIcon } />
        <Formik
          initialValues={ { ...initialValues } }
          validationSchema={ schema }
          onSubmit={ onSubmit }
        >
          {
            ({
              values,
            }) => {
              return (
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
                  />
                  <div className={ style.supportButtons }>
                    <Button>Cancel</Button>
                    <Button
                      type="submit"
                      primary={ true }
                    >Send</Button>
                  </div>
                </Form>
              );
            }
          }
        </Formik>
      </div>
    </Layout>
  );
};

export default Support;
