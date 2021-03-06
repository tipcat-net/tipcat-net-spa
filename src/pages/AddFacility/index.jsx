import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { Layout } from '../../components/ui/Layout';
import { Text } from '../../components/ui/Text';
import { FormInput } from '../../components/form/form-input';
import { FormRequiredError } from '../../components/form/error-required';
import { FormCheckbox } from '../../components/form/form-checkbox';
import { Button } from '../../components/ui/Button';
import { Home, PlusSquare } from '../../components/ui/Icons';
import { AvatarCropper } from '../../components/avatar/cropper';
import { Success } from '../../components/success';

import { ROUTES } from '../../constants/routes';
import { schema } from '../../form-helpers/addFacility/schema';

import { selectMember } from '../../ducks/member/selectors';
import { selectAccount, selectAccountLoading } from '../../ducks/account/selectors';
import { getAccount } from '../../ducks/account/actions';
import { addFacility } from '../../ducks/facility/actions';

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const AddFacility = () => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);
  const [dataCropAvatar, setDataCropAvatar] = useState(null);

  useEffect(() => {
    if (member && !accountLoading) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  const toggleCropAvatar = (e) => {
    setDataCropAvatar(e);
  };

  const onSubmit = (values) => {
    const data = {
      ...values,
      accountId: account.id,
    };

    delete data.useAccountAddress;

    const callback = () => setVisibleSuccess(true);

    put(addFacility(data, callback));
  };

  return (
    <Layout hiddenHeader={ true }>
      <Formik
        initialValues={ { ...initialValues, useAccountAddress: false, useAccountAvatar: false } }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            touched,
            setValues,
            setFieldValue,
            resetForm,
          }) => {

            const handleChangeUseAddress = (e) => {
              setValues({
                ...values,
                useAccountAddress: e.target.checked,
                address: e.target.checked ? account.address : '',
              });
            };

            const handleChangeAvatar = (e) => {
              setFieldValue('avatar', e);
              toggleCropAvatar(null);
            };

            const handleChangeUseAccountAvatar = (e) => {
              setFieldValue('useAccountAvatar', e.target.checked);
            };

            const onSuccessBtnAdd = () => {
              resetForm();
              setVisibleSuccess(false);
            };

            return (
              <React.Fragment>
                <div className={ style.create }>
                  <Text
                    size='big'
                    className={ style.createTitle }
                  >{ t('addFacility.title') }</Text>
                  <Form>
                    <FormInput
                      label={ t('addFacility.fields.operatingName.label') }
                      name="name"
                      type="text"
                      value={ values.name }
                      required={ true }
                      className={ style.createItem }
                    />
                    <FormInput
                      label={ t('addFacility.fields.address.label') }
                      name="address"
                      type="textarea"
                      value={ values.address }
                      className={ style.createItem }
                    />
                    <FormCheckbox
                      label={ t('addFacility.fields.useAccountAddress.label') }
                      name="useAccountAddress"
                      checked={ values.useAccountAddress }
                      onChange={ handleChangeUseAddress }
                    />
                    <FormInput
                      name="avatar"
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={ toggleCropAvatar }
                      className={ style.createInputAvatar }
                    />
                    <AvatarCropper
                      data={ dataCropAvatar }
                      onClose={ () => {
                        toggleCropAvatar(null);
                      } }
                      onCrop={ handleChangeAvatar }
                    />
                    <FormCheckbox
                      label={ t('addFacility.fields.useAccountAvatar.label') }
                      name="useAccountAvatar"
                      checked={ values.useAccountAvatar }
                      onChange={ handleChangeUseAccountAvatar }
                    />
                    {
                      errors ?
                        <FormRequiredError
                          touched={ touched }
                          errors={ errors }
                          message={ t('addFacility.formRequiredError') }
                          className={ style.createError }
                        />
                        :
                        null
                    }
                    <div className={ style.createButtons }>
                      <Button>{ t('addFacility.buttons.back') }</Button>
                      <Button type='submit' primary={ true }>{ t('addFacility.buttons.submit') }</Button>
                    </div>
                  </Form>
                </div>
                <Success
                  visible={ visibleSuccess }
                  actionTop={
                    <Button
                      className={ style.createSuccessBtnHome }
                      href={ ROUTES.HOME.path }
                      icon={ <Home /> }
                    >{ t('addFacility.success.btnHome') }</Button>
                  }
                  message={ t('addFacility.success.message') }
                  actionBottom={
                    <Button
                      borderNone={ true }
                      className={ style.createSuccessBtnAdd }
                      onClick={ onSuccessBtnAdd }
                      icon={ <PlusSquare /> }
                    >{ t('addFacility.success.btnAdd') }</Button>
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

export default AddFacility;
