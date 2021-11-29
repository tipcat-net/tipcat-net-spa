import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { FormItem } from '../form-item'
import { EditProfile } from '../';

import { schema } from '../../../../form-helpers/account-edit/schema';
import { getInitialValues } from '../../../../form-helpers/account-edit/mapping';
import { updateAccount } from '../../../../ducks/account/actions';
import { updateAvatarAccount } from '../../../../ducks/account/actions';
import { AvatarCropper } from '../../../avatar/сropper';

export const AccountProfileEdit = ({ account, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState();
  const [dataCropAvatar, setDataCropAvatar] = useState(null);

  const toggleVisivbleField = (field) => {
    if (!field || field === visivbleField) {
      setVisivbleField()
    } else {
      setVisivbleField(field);
    }
  }

  const toggleCropAvatar = (e) => {
    setDataCropAvatar(e)
  }

  const closeEditProfile = () => {
    toggleVisivbleField();
    toggleVisibleSubstrate();
    openVisibleSuccess();
  }

  const onSubmit = (values) => {
    if (visivbleField === 'avatarUrl' && (values[visivbleField] !== account[visivbleField])) {
      put(updateAvatarAccount({
        id: values.id,
        data: { File: values[visivbleField] }
      }, closeEditProfile))
    }
    if (values[visivbleField] !== account[visivbleField]) {
      put(updateAccount(values, closeEditProfile))
    }
  }

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
            setValues,
            setFieldValue
          }) => {
            const onCancel = (name) => {
              setValues({
                ...values,
                [name]: account[name]
              });
              toggleVisivbleField();
            }

            const handleChangeAvatar = (e) => {
              setFieldValue('avatarUrl', e);
              toggleCropAvatar(null);
            }

            return (
              <Form>
                <FormItem
                  label={ t('accountProfile.edit.fields.operatingName.label') }
                  name="operatingName"
                  type="text"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.avatar.label') }
                  name="avatarUrl"
                  type="file"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                  onChange={ toggleCropAvatar }
                />
                <AvatarCropper
                  data={ dataCropAvatar }
                  onClose={ () => {
                    toggleCropAvatar(null)
                    onCancel('avatarUrl')
                  } }
                  onCrop={ handleChangeAvatar }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.address.label') }
                  name="address"
                  type="textarea"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.email.label') }
                  name="email"
                  type="text"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.phone.label') }
                  name="phone"
                  type="text"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
                <FormItem
                  label={ t('accountProfile.edit.fields.name.label') }
                  name="name"
                  type="text"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
              </Form>
            )
          }
        }
      </Formik>
    </EditProfile>
  )
}
