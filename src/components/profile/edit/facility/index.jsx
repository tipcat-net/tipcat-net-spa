import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { EditProfile } from '../';
import { EditProfileItem } from '../item';
import { Input, TextArea } from '../../../ui/Input';
import { UploadFile } from '../../../ui/UploadFile';
import { AvatarCropper } from '../../../avatar/cropper';

import { schema } from '../../../../form-helpers/facility-edit/schema';
import { getInitialValues } from '../../../../form-helpers/facility-edit/mapping';
import { selectUpdateAvatarFacilityLoading, selectUpdateFacilityLoading } from '../../../../ducks/facility/selectors';
import { updateAvatarFacility, updateFacility } from '../../../../ducks/facility/actions';

import style from './styles.module.scss';

export const FacilityProfileEdit = ({ profile, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});
  const [visivbleField, setVisivbleField] = useState();
  const [dataCropAvatar, setDataCropAvatar] = useState(null);
  const updateAvatarFacilityLoading = useSelector(selectUpdateAvatarFacilityLoading);
  const updateFacilityLoading = useSelector(selectUpdateFacilityLoading);

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

  const isErrors = (errors) => {
    return Object.keys(errors).length === 0 ? false : true;
  };

  const onSubmit = (values) => {
    const {avatarUrl, ...data} = values;

    data.sessionEndTime = `${data.sessionEndTime.replace('.', ':')}:00`;

    if (visivbleField === 'avatarUrl' && (values[visivbleField] !== profile[visivbleField])) {
      put(updateAvatarFacility({
        id: values.id,
        accountId: values.accountId,
        data: { File: avatarUrl },
      }, closeEditProfile));
    } else if (visivbleField !== 'avatarUrl' && data[visivbleField] !== profile[visivbleField]) {
      put(updateFacility(data, closeEditProfile()));
    }
  };

  return (
    <EditProfile
      closeVisible={ toggleVisibleSubstrate }
    >
      <Formik
        initialValues={ getInitialValues(initialValues, profile) }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            setFieldValue,
            handleChange,
          }) => {
            const onCancel = (name) => {
              if (name === 'sessionEndTime') {
                setFieldValue(name, profile[name].slice(0, 5).replace(':', '.'));
              } else {
                setFieldValue(name, profile[name]);
              }
              toggleVisivbleField();
            };

            const handleChangeAvatar = (e) => {
              setFieldValue('avatarUrl', e);
              toggleCropAvatar(null);
            };

            const transformNumber = (number) => number.replace(/\d{2}/g, (match, offset) => {
              if (offset === 2) {
                return parseInt(match) > 59 ? '59' : match;
              } else {
                return parseInt(match) > 23 ? '23.' : `${match}.`;
              }
            });

            const handleChangeSessionEndTime = (e) => {
              let value = e.target.value.replaceAll('.', '');

              if (!/^[\d]*$/.test(value) || value.length > 4) {
                return;
              }
              if (value === values.sessionEndTime.replaceAll('.', '')) {
                value = value.slice(0, value.length - 1);
              }

              setFieldValue('sessionEndTime', transformNumber(value));
            };

            return (
              <Form>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.name.title') }
                  name="name"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.name || updateFacilityLoading }
                >
                  <Input
                    name="name"
                    value={ values.name }
                    onChange={ handleChange }
                    error={ errors.name }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.avatar.title') }
                  name="avatarUrl"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  file={ true }
                  error={ updateAvatarFacilityLoading }
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
                  title={ t('editProfile.facilityProfile.items.address.title') }
                  name="address"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.address || updateFacilityLoading }
                >
                  <TextArea
                    name="address"
                    value={ values.address }
                    onChange={ handleChange }
                    error={ errors.address }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.email.title') }
                  name="email"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.email || updateFacilityLoading }
                >
                  <Input
                    name="email"
                    value={ values.email }
                    onChange={ handleChange }
                    error={ errors.email }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.phone.title') }
                  name="phone"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.phone || updateFacilityLoading }
                >
                  <Input
                    name="phone"
                    value={ values.phone }
                    onChange={ handleChange }
                    error={ errors.phone }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.operatingName.title') }
                  name="operatingName"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.operatingName || updateFacilityLoading }
                >
                  <Input
                    name="operatingName"
                    value={ values.operatingName }
                    onChange={ handleChange }
                    error={ errors.operatingName }
                  />
                </EditProfileItem>
                <EditProfileItem
                  title={ t('editProfile.facilityProfile.items.workingSessionEndTime.title') }
                  name="sessionEndTime"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                  onCancel={ onCancel }
                  error={ errors.sessionEndTime || updateFacilityLoading }
                  className={ style.sessionEndTime }
                >
                  <div className={ style.sessionEndTimeInputWrap }>
                    <Input
                      name="sessionEndTime"
                      value={ values.sessionEndTime }
                      onChange={ handleChangeSessionEndTime }
                      error={ errors.sessionEndTime }
                    />
                  </div>
                </EditProfileItem>
              </Form>
            );
          }
        }
      </Formik>
    </EditProfile>
  );
};
