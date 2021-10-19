import cn from 'classnames';

import style from './styles.module.scss';

export const Input = ({ className, error, ...Allprops }) => {
  const addClass = className ? className : null;
  const classError = error ? style.error : null;
  
  return (
    <input
      className={ cn(style.input, classError, addClass) }
      {...Allprops}  />
  )
}

export const TextArea = ({ className, error, ...Allprops }) => {
  const addClass = className ? className : null;
  const classError = error ? style.error : null;
  
  return (
    <textarea
      className={ cn(style.textarea, classError, addClass) }
      {...Allprops}  />
  )
} 
