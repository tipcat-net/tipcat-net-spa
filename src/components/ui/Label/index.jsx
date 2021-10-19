import cn from 'classnames';

import style from './styles.module.scss';

export const Label = ({ children, className, htmlFor, ...allProps }) => {
  return (
    <label
      htmlFor={ htmlFor }
      className={ cn(style.label, className) }
      { ...allProps }
      >
      { children }
    </label>
  )
} 