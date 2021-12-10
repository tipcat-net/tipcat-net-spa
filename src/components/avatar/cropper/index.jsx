import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const AvatarCropper = ({ data, onClose, onCrop }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState();
  const cropperRef = useRef(null);

  const addImage = () => {
    let files;

    if (data) {
      if (data.dataTransfer) {
        files = data.dataTransfer.files;
      } else if (data.target) {
        files = data.target.files;
      }
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const CropImage = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;

    cropper.getCroppedCanvas({
      width: 188,
      weight: 188,
    }).toBlob(blob => {
      const formData = new FormData();

      formData.append('croppedImage', blob, `avatar.${blob.type.split('/')[1]}`);
      onCrop(formData.get('croppedImage'));
    });
  };

  if (!data) {
    return null;
  }

  addImage();

  return (
    <div className={ style.avatarCropper }>
      <Cropper
        className={ style.avatarCropperContainer }
        src={ image }
        dragMode='move'
        initialAspectRatio={ 1 }
        responsive={ false }
        guides={ false }
        autoCropArea={ 0.752 }
        toggleDragModeOnDblclick={ false }
        minCropBoxHeight={ 188 }
        minCropBoxWidth={ 188 }
        cropBoxResizable={ false }
        minContainerWidth={ 250 }
        minContainerHeight={ 250 }
        zoomTo={ 1 }
        ref={ cropperRef }
      />
      <div className={ style.avatarCropperBtns }>
        <Button onClick={ onClose } className={ style.avatarCropperBtn }>{ t('avatarCropper.close') }</Button>
        <Button primary={ true } onClick={ CropImage } className={ style.avatarCropperBtn }>{ t('avatarCropper.crop') }</Button>
      </div>
    </div>
  );
};
