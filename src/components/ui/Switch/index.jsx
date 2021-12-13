import React, { useRef } from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Switch = ({ className, onChange, checked }) => {
  const switchRef = useRef(null);

  return (
    <label
      className={ style.switch }
      onClick={ () => switchRef.current.checked }
    >
      <input
        type="checkbox"
        ref={ switchRef }
        className={ cn(style.switchInput, className) }
        onChange={ onChange }
        checked={ checked }
      />
      <span className={ style.switchChecked }></span>
    </label>
  );
};
