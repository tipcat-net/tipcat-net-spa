import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { EditProfile } from '../';
import { EditProfileItem } from '../item';
import { Label } from '../../../ui/Label';
import { Input } from '../../../ui/Input';
import { UploadFile } from '../../../ui/UploadFile';
import { AvatarCropper } from '../../../avatar/cropper';

import { ROUTES } from '../../../../constants/routes';
import { MemberPermissions } from '../../../../constants/MemberPermissions';

import { schema } from '../../../../form-helpers/member-edit/schema';
import { getInitialValues } from '../../../../form-helpers/member-edit/mapping';
import { updateMember, updateAvatarMember, deleteMember, deactivateMember, activateMember } from '../../../../ducks/member/actions';
import { selectMember } from '../../../../ducks/member/selectors';

export const MemberProfileEdit = ({ profile, toggleVisibleSubstrate, openVisibleSuccess }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const initialValues = schema.cast({});
  const currentMember = useSelector(selectMember);
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

  const isErrors = (errors) => {
    return Object.keys(errors).length === 0 ? false : true;
  };

  const onSubmit = (values) => {
    const {avatarUrl, ...data} = values;

    if (visivbleField === 'avatarUrl' && (values[visivbleField] !== profile[visivbleField])) {
      put(updateAvatarMember({
        id: values.id,
        accountId: values.accountId,
        data: { File: avatarUrl },
      }, closeEditProfile));
    } else if (visivbleField !== 'avatarUrl' &&
      (visivbleField.split(',').filter(item => values[item] !== profile[item]).length > 0)) {
      put(updateMember(data, closeEditProfile));
    }
  };

  const onDeactivateMember = (profile) => {
    put(deactivateMember({
      id: profile.id,
      accountId: profile.accountId,
    }, closeEditProfile));
  };

  const onActivateMember = (profile) => {
    put(activateMember({
      id: profile.id,
      accountId: profile.accountId,
    }, closeEditProfile));
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
              name.split(',').forEach(item => setFieldValue(item, profile[item]));
              toggleVisivbleField();
            };

            const handleChangeAvatar = (e) => {
              setFieldValue('avatarUrl', e);
              toggleCropAvatar(null);
            };

            return (
              <Form>
                {
                  currentMember.permissions === MemberPermissions.Manager ?
                    <React.Fragment>
                      <EditProfileItem
                        title={ t('editProfile.memberProfile.items.name.title') }
                        name="firstName,lastName"
                        visivbleField={ visivbleField }
                        toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                        onCancel={ onCancel }
                        error={ errors.firstName || errors.lastName }
                      >
                        <Label>{ t('editProfile.memberProfile.items.name.labels.firstName') }</Label>
                        <Input
                          name="firstName"
                          value={ values.firstName }
                          onChange={ handleChange }
                          error={ errors.firstName }
                        />
                        <Label>{ t('editProfile.memberProfile.items.name.labels.lastName') }</Label>
                        <Input
                          name="lastName"
                          value={ values.lastName }
                          onChange={ handleChange }
                          error={ errors.lastName }
                        />
                      </EditProfileItem>
                      <EditProfileItem
                        title={ t('editProfile.memberProfile.items.position.title') }
                        name="position"
                        visivbleField={ visivbleField }
                        toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                        onCancel={ onCancel }
                        error={ errors.position }
                      >
                        <Input
                          name="position"
                          value={ values.position }
                          onChange={ handleChange }
                          error={ errors.position }
                        />
                      </EditProfileItem>
                    </React.Fragment>
                    : null
                }
                <EditProfileItem
                  title={ t('editProfile.memberProfile.items.avatar.title') }
                  name="avatarUrl"
                  visivbleField={ visivbleField }
                  toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
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
                {
                  currentMember.id === profile.id ?
                    <EditProfileItem
                      title={ t('editProfile.memberProfile.items.email.title') }
                      name="email"
                      visivbleField={ visivbleField }
                      toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
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
                    : null
                }
                {
                  currentMember.permissions === MemberPermissions.Manager && currentMember.id === profile.id ?
                    <EditProfileItem
                      href={ ROUTES.HOME.path }
                      title={ t('editProfile.memberProfile.items.transferAccountRights.title') }
                    ></EditProfileItem>
                    : null
                }
                {
                  currentMember.permissions === MemberPermissions.Manager && currentMember.id !== profile.id ?
                    <React.Fragment>
                      <EditProfileItem
                        title={ t('editProfile.memberProfile.items.transferTheMemberTo.title') }
                      ></EditProfileItem>
                      {
                        profile.isActive ?
                          <EditProfileItem
                            title={ t('editProfile.memberProfile.items.deactivate.title') }
                            onClick={ () => onDeactivateMember(profile) }
                          ></EditProfileItem>
                          :
                          <EditProfileItem
                            title={ t('editProfile.memberProfile.items.activate.title') }
                            onClick={ () => onActivateMember(profile) }
                          ></EditProfileItem>
                      }
                      <EditProfileItem
                        title={ t('editProfile.memberProfile.items.delete.title') }
                        onClick={ () => {
                          put(deleteMember({
                            id: profile.id,
                            accountId: profile.accountId,
                          }, closeEditProfile));
                        } }
                      ></EditProfileItem>
                    </React.Fragment>
                    : null
                }
              </Form>
            );
          }
        }
      </Formik>
    </EditProfile>
  );
};
