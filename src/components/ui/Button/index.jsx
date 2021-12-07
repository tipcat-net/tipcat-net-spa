import { Link } from 'react-router-dom';
import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, className, href, type, primary, menu, clear, ...allProps }) => {
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classClear = clear ? styles.buttonClear : null;
  const classMenu = menu ? styles.buttonMenu : null;

  if (href) {
    return (
      <Link
        to={ href }
        className={ cn(styles.button, classMenu, classPrimary, classClear, className) }
        { ...allProps }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      type={ type ? type : 'button' }
      className={ cn(styles.button, classMenu, classPrimary, classClear, className) }
      { ...allProps }
    >
      { children }
    </button>
  )
}
