import React from 'react';

import style from './styles.module.scss';

export const EditProfile = ({ children }) => {
  return (
    <div className={ style.editProfile }>
      <div className={ style.editProfileTitle }>Edit</div>
      { children }
    </div>
  );
}

export default EditProfile;
