import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, type, onClick, outline, primary, clear, className, ...allProps }) => {
  const classOutline = outline ? styles.buttonOutline : null;
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classClear = clear ? styles.buttonClear : null;

  return (
    <button
      type={ type ? type : 'button' }
      onClick={ onClick }
      className={ cn(styles.button, classOutline, classPrimary, classClear, className) }
      { ...allProps }
    >
      { children }
    </button>
  )
}
