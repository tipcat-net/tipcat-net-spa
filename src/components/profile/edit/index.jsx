import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';
import { Edit } from '../../ui/Icons';

import style from './styles.module.scss';

export const EditProfile = ({ children, closeVisible }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.editProfile }>
      <Text
        size='small'
        strong={ true }
        className={ style.editProfileTitle }
      >{ t('editProfile.title') }</Text>
      { children }
      <Button
        borderNone={ true }
        className={ style.editProfileBtnEdit }
        onClick={ closeVisible }
        icon={ <Edit className={ style.editProfileBtnEditIcon } /> }
      ></Button>
    </div>
  );
};

export default EditProfile;
