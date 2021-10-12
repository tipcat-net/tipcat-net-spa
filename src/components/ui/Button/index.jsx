import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, onClick, primary, transparent, clear, className, ...allProps }) => {
  const classPrimary = primary ? styles.btnPrimary : '';
  const classTransparent = transparent ? styles.btnTransparent : '';
  const classClear = clear ? styles.btnClear : '';

  return (
    <button className={ cn(styles.btn, classPrimary, classTransparent, classClear, className) } onClick={onClick} { ...allProps }>{ children }</button>
  )
}