import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { FormItem } from '../form-item'
import { EditProfile } from '../';

import { schema } from '../../../../form-helpers/account-edit/schema';
import { getInitialValues } from '../../../../form-helpers/account-edit/mapping';
import { updateAccount } from '../../../../ducks/account/actions';

export const AccountProfileEdit = ({ account, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState();

  const toggleVisivbleField = (field) => {
    if (!field || field === visivbleField) {
      setVisivbleField()
    } else {
      setVisivbleField(field);
    }
  }

  const closeEditProfile = () => {
    toggleVisivbleField();
    toggleVisibleSubstrate();
    openVisibleSuccess();
  }

  const onSubmit = (values) => {
    if (values[visivbleField] !== account[visivbleField]) {
      closeEditProfile();
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
            setValues
          }) => {
            const onCancel = (name) => {
              setValues({
                ...values,
                [name]: account[name]
              });
              toggleVisivbleField();
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
                {/* <FormItem
                  label={ t('accountProfile.edit.fields.avatar.label') }
                  name="avatar"
                  type="file"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                /> */}
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
