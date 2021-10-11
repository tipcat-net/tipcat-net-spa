import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, onClick, primary, transparent, ...allProps }) => {
  const classPrimary = primary ? styles.btnPrimary : '';
  const classTransparent = transparent ? styles.btnTransparent : '';

  return (
    <button className={ cn(styles.btn, classPrimary, classTransparent) } onClick={onClick} { ...allProps }>{ children }</button>
  )
}