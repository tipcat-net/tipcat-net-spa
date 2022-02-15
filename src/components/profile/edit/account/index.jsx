import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { EditProfile } from '../';
import { EditProfileItem } from '../item';
import { Input, TextArea } from '../../../ui/Input';
import { UploadFile } from '../../../ui/UploadFile';
import { AvatarCropper } from '../../../avatar/cropper';

import { schema } from '../../../../form-helpers/account-edit/schema';
import { getInitialValues } from '../../../../form-helpers/account-edit/mapping';
import { updateAccount, updateAvatarAccount } from '../../../../ducks/account/actions';

export const AccountProfileEdit = ({ account, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState();
  const [dataCropAvatar, setDataCropAvatar] = useState(null);

  const toggleVisivbleField = (field) => {
    setVisivbleField(field);
  };

  const toggleCropAvatar = (e) => {
    setDataCropAvatar(e);
  };

  const closeEditProfile = () => {
    toggleVisivbleField();
    toggleVisibleSubstrate();
    openVisibleSuccess();
  };

  const hasErrors = (errors) => {
    return Object.keys(errors).length === 0 ? false : true;
  };

  const onSubmit = (values) => {
    if (visivbleField === 'avatarUrl' && (values[visivbleField] !== account[visivbleField])) {
      put(updateAvatarAccount({
        id: values.id,
        data: { File: values[visivbleField] },
      }, closeEditProfile));
    } else if (values[visivbleField] !== account[visivbleField]) {
      put(updateAccount(values, closeEditProfile));
    }
  };

  return (
    <EditProfile >
      <Formik
        initialValues={ getInitialValues(initialValues, account) }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            setValues,
            setFieldValue,
            handleChange,
          }) => {
            const onCancel = (name) => {
              setValues({
                ...values,
                [name]: account[name],
              });
              toggleVisivbleField();
            };

            const handleChangeAvatar = (e) => {
              setFieldValue('avatarUrl', e);
              toggleCropAvatar(null);
            };

            return (
              <Form>
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.operatingName.label') }
                  name="operatingName"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.operatingName }
                >
                  <Input
                    name="operatingName"
                    value={ values.operatingName }
                    onChange={ handleChange }
                    error={ errors.operatingName }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.avatar.label') }
                  name="avatarUrl"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  file={ true }
                >
                  <UploadFile
                    name="avatarUrl"
                    accept="image/jpeg,image/png,image/jpg"
                    onChange={ toggleCropAvatar }
                  />
                </EditProfileItem>
                <AvatarCropper
                  data={ dataCropAvatar }
                  onClose={ () => {
                    toggleCropAvatar(null);
                    onCancel('avatarUrl');
                  } }
                  onCrop={ handleChangeAvatar }
                />
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.address.label') }
                  name="address"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.address }
                >
                  <TextArea
                    name="address"
                    value={ values.address }
                    onChange={ handleChange }
                    error={ errors.address }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.email.label') }
                  name="email"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.email }
                >
                  <Input
                    name="email"
                    value={ values.email }
                    onChange={ handleChange }
                    error={ errors.email }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.phone.label') }
                  name="phone"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.phone }
                >
                  <Input
                    name="phone"
                    value={ values.phone }
                    onChange={ handleChange }
                    error={ errors.phone }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('accountProfile.edit.fields.name.label') }
                  name="name"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ hasErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.name }
                >
                  <Input
                    name="name"
                    value={ values.name }
                    onChange={ handleChange }
                    error={ errors.name }
                  />
                </EditProfileItem>
              </Form>
            );
          }
        }
      </Formik>
    </EditProfile>
  );
};
