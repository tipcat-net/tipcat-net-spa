import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, onClick, primary, clear, className, ...allProps }) => {
  const classPrimary = primary ? styles.btnPrimary : '';
  const classClear = clear ? styles.btnClear : '';

  return (
    <button className={ cn(styles.btn, classPrimary, classClear, className) } onClick={onClick} { ...allProps }>{ children }</button>
  )
}