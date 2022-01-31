import React, { useRef } from 'react';
import cn from 'classnames';

import { Button } from '../Button';
import { Gallery } from '../Icons';

import style from './styles.module.scss';

export const UploadFile = ({ className, error, ...Allprops }) => {
  const fileInput = useRef(null);

  return (
    <div className={ cn(style.uploadFile, className) }>
      <input
        type="file"
        ref={ fileInput }
        className={ style.uploadFileInput }
        { ...Allprops } />
      <Button
        className={ style.uploadFileButton }
        icon={ <Gallery className={ style.uploadFileButtonIcon } /> }
        onClick={ () => fileInput.current.click() }
      ></Button>
    </div>
  );
};
