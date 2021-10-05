import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, onClick, primary, transparent }) => {
  const classPrimary = primary ? styles.btnPrimary : '';
  const classTransparent = transparent ? styles.btnTransparent : '';

  return (
    <button className={ cn(styles.btn, classPrimary, classTransparent) } onClick={onClick}>{ children }</button>
  )
}