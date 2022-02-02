import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../ui/Text';

import style from './styles.module.scss';

export const EditProfile = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={ style.editProfile }>
      <Text
        size='small'
        strong={ true }
        className={ style.editProfileTitle }
      >{ t('editProfile.title') }</Text>
      { children }
    </div>
  );
};

export default EditProfile;
