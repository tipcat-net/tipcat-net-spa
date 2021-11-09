import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, type, onClick, primary, clear, className, ...allProps }) => {
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classClear = clear ? styles.buttonClear : null;

  return (
    <button
      type={ type ? type : 'button' }
      onClick={ onClick }
      className={ cn(styles.button, classPrimary, classClear, className) }
      { ...allProps }
    >
      { children }
    </button>
  )
}
