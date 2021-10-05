import style from './styles.module.scss';

export const Label = ({ children, className, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={ className ? `${style.label} ${className}` : style.label }
      >
      {children}
    </label>
  )
} 