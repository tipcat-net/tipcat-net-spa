import React, { useRef } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import { Image } from '../Icons';
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
        type="button"
        className={ style.uploadFileButton }
        onClick={ () => fileInput.current.click() }
      >
        <Image />
      </Button>
    </div>
  );
};
