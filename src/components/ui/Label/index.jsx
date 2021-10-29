import cn from 'classnames';

import style from './styles.module.scss';

export const Label = ({ children, className, htmlFor, required, ...allProps }) => {
  return (
    <label
      htmlFor={ htmlFor }
      className={ cn(style.label, className) }
      { ...allProps }
    >
      { children }
      { required ? <span className={ style.labelRequired }>*</span> : null }
    </label>
  )
} 
