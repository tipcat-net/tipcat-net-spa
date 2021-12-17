import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { FormItem } from '../form-item';
import { EditProfile } from '../';

import { schema } from '../../../../form-helpers/member-edit/schema';
import { getInitialValues } from '../../../../form-helpers/member-edit/mapping';
import { updateMember, updateAvatarMember } from '../../../../ducks/member/actions';
import { AvatarCropper } from '../../../avatar/cropper';

export const MemberProfileEdit = ({ member, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});

  const [visivbleField, setVisivbleField] = useState();
  const [dataCropAvatar, setDataCropAvatar] = useState(null);

  const toggleVisivbleField = (field) => {
    if (!field || field === visivbleField) {
      setVisivbleField();
    } else {
      setVisivbleField(field);
    }
  };

  const toggleCropAvatar = (e) => {
    setDataCropAvatar(e);
  };

  const closeEditProfile = () => {
    toggleVisivbleField();
    toggleVisibleSubstrate();
    openVisibleSuccess();
  };

  const onSubmit = (values) => {
    const {avatarUrl, ...data} = values;

    if (visivbleField === 'avatarUrl' && (values[visivbleField] !== member[visivbleField])) {
      put(updateAvatarMember({
        id: values.id,
        accountId: values.accountId,
        data: { File: avatarUrl },
      }, closeEditProfile));
    } else if (values[visivbleField] !== member[visivbleField]) {
      put(updateMember(data, closeEditProfile));
    }
  };

  return (
    <EditProfile >
      <Formik
        initialValues={ getInitialValues(initialValues, member) }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            setValues,
            setFieldValue,
          }) => {
            const onCancel = (name) => {
              setValues({
                ...values,
                [name]: member[name],
              });
              toggleVisivbleField();
            };

            const handleChangeAvatar = (e) => {
              setFieldValue('avatarUrl', e);
              toggleCropAvatar(null);
            };

            return (
              <Form>
                <FormItem
                  label={ t('memberProfile.edit.fields.avatar.label') }
                  name="avatarUrl"
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                  onChange={ toggleCropAvatar }
                />
                <AvatarCropper
                  data={ dataCropAvatar }
                  onClose={ () => {
                    toggleCropAvatar(null);
                    onCancel('avatarUrl');
                  } }
                  onCrop={ handleChangeAvatar }
                />
                <FormItem
                  label={ t('memberProfile.edit.fields.email.label') }
                  name="email"
                  type="text"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ toggleVisivbleField }
                  onCancel={ onCancel }
                />
              </Form>
            );
          }
        }
      </Formik>
    </EditProfile>
  );
};
