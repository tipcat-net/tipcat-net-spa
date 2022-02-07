import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from './../../../ui/Button';

import style from './styles.module.scss';

export const EditProfileItem = ({
  children, title, name, href, file, onClick, visivbleField, toggleVisivbleField, onCancel, error,
}) => {
  const { t } = useTranslation();
  const classOpen = visivbleField === name ? style.editProfileItemContentOpen : null;
  const classFile = file ? style.editProfileItemContentFile : null;

  return (
    <div className={ style.editProfileItem }>
      {
        children ?
          <React.Fragment>
            <Button
              borderNone={ true }
              className={ style.editProfileItemToggle }
              onClick={ toggleVisivbleField ? () => toggleVisivbleField(name) : null }
            >{ title }</Button>
            {
              children ?
                <div className={ cn(style.editProfileItemContent, classFile, classOpen) }>
                  { children }
                  <div className={ style.editProfileItemBtns }>
                    <Button
                      onClick={ () => onCancel(name) }
                    >{ t('editProfile.editProfileItem.cancel') }</Button>
                    <Button
                      type='submit'
                      primary={ true }
                      disabled={ error }
                    >{ t('editProfile.editProfileItem.save') }</Button>
                  </div>
                </div>
                : null
            }
          </React.Fragment>
          :
          <Button
            href={ href ? href : null }
            borderNone={ true }
            onClick={ onClick ? onClick : null }
            className={ style.editProfileItemLink }
          >{ title }</Button>
      }
    </div>
  );
};
