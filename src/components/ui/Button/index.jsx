import { Link } from 'react-router-dom';
import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, type, onClick, primary, transparent, menu, clear, className, href, ...allProps }) => {
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classTransparent = transparent ? styles.buttonTransparent : null;
  const classClear = clear ? styles.buttonClear : null;
  const classMenu = menu ? styles.buttonMenu : null;
  
  if (href) {
    return (
      <Link
        to={ href }
        className={ cn(styles.button, classPrimary, classTransparent, classClear, classMenu, className) }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      type={ type ? type : 'button' }
      onClick={ onClick }
      className={ cn(styles.button, classPrimary, classTransparent, classClear, classMenu, className) }
      { ...allProps }
    >
      { children }
    </button>
  )
}
