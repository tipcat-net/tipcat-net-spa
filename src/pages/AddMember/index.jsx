import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Formik, Form } from 'formik';

import { Layout } from '../../components/ui/Layout';
import { FormInput } from '../../components/form/form-input';
import { FormRequiredError } from '../../components/form/error-required';
import { Button } from '../../components/ui/Button';
import { Text } from '../../components/ui/Text';
import { Home, PlusSquare } from '../../components/ui/Icons';
import { AvatarCropper } from '../../components/avatar/cropper';
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
  const history = useHistory();
  const [dataCropAvatar, setDataCropAvatar] = useState(null);

  const toggleCropAvatar = (e) => {
    setDataCropAvatar(e);
  };

  const closeSuccess = () => setVisibleSuccess(true);

  const onSubmit = (values) => {
    put(addMember(values, closeSuccess));
  };

  return (
    <Layout hiddenHeader={ true }>
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
            setFieldValue,
          }) => {
            const handleChangeAvatar = (e) => {
              setFieldValue('avatar', e);
              toggleCropAvatar(null);
            };

            const onSuccessBtnAdd = () => {
              resetForm();
              setVisibleSuccess(false);
            };

            return (
              <React.Fragment>
                <div className={ style.create }>
                  <Text size="big" className={ style.createTitle }>{ t('addMember.title') }</Text>
                  <Form>
                    <FormInput
                      label={ t('addMember.fields.firstName.label') }
                      name="firstName"
                      type="text"
                      value={ values.firstName }
                      className={ style.createItem }
                      required={ true }
                    />
                    <FormInput
                      label={ t('addMember.fields.lastName.label') }
                      name="lastName"
                      type="text"
                      value={ values.lastName }
                      className={ style.createItem }
                      required={ true }
                    />
                    <FormInput
                      label={ t('addMember.fields.email.label') }
                      name="email"
                      type="email"
                      checked={ values.email }
                      className={ style.createItem }
                      required={ true }
                    />
                    <FormInput
                      name="avatar"
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={ toggleCropAvatar }
                      className={ cn(style.createItem, style.createItemAvatar) }
                    />
                    <AvatarCropper
                      data={ dataCropAvatar }
                      onClose={ () => {
                        toggleCropAvatar(null);
                      } }
                      onCrop={ handleChangeAvatar }
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
                      <Button onClick={ history.goBack }>{ t('addMember.buttons.back') }</Button>
                      <Button type='submit' primary={ true }>{ t('addMember.buttons.submit') }</Button>
                    </div>
                  </Form>
                </div>
                <Success
                  visible={ visibleSuccess }
                  actionTop={
                    <Button
                      white={ true }
                      className={ style.createSuccessBtnHome }
                      href={ ROUTES.HOME.path }
                      icon={ Home }
                    >
                      { t('addMember.success.btnHome') }
                    </Button>
                  }
                  message={ t('addMember.success.message') }
                  actionBottom={
                    <Button
                      borderNone={ true }
                      className={ style.createSuccessBtnAdd }
                      onClick={ onSuccessBtnAdd }
                      icon={ PlusSquare }
                    >
                      { t('addMember.success.btnAdd') }
                    </Button>
                  }
                />
              </React.Fragment>
            );
          }
        }
      </Formik>
    </Layout>
  );
};

export default AddMember;
