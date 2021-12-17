import React, { useRef } from 'react';
import cn from 'classnames';

import style from './styles.module.scss';

export const Сheckbox = ({ className, label, onChange, checked }) => {
  const checkbox = useRef(null);

  return (
    <label
      className={ style.checkbox }
      onClick={ () => checkbox.current.checked }
    >
      <input
        type="checkbox"
        ref={ checkbox }
        className={ cn(style.checkboxInput, className) }
        onChange={ onChange }
        checked={ checked }
      />
      <span className={ style.checkboxChecked  }></span>
      { label }
    </label>
  );
};
