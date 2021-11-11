import React from 'react';

import style from './styles.module.scss';

export const Success = ({ visible, actionTop, message, actionBottom }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={ style.success }>
      { actionTop ? <div className={ style.successActionTop }>{ actionTop }</div> : null }
      <div className={ style.successMessage }>{ message }</div>
      { actionBottom ? <div className={ style.successActionBottom }>{ actionBottom }</div> : null }
    </div>
  )
}
