import { Link } from 'react-router-dom';
import cn from 'classnames'

import styles from './styles.module.scss';

export const Button = ({ children, className, href, type, primary, borderNone, clear, white, whiteActive, ...allProps }) => {
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classClear = clear ? styles.buttonClear : null;
  const classBorderNone = borderNone ? styles.buttonBorderNone : null;
  const classWhite = white ? styles.buttonWhite : null;
  const classWhiteActive = whiteActive ? styles.buttonWhiteActive : null;

  if (href) {
    return (
      <Link
        to={ href }
        className={ cn(styles.button, classBorderNone, classPrimary, classClear, classWhite, classWhiteActive, className) }
        { ...allProps }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      type={ type ? type : 'button' }
      className={ cn(styles.button, classBorderNone, classPrimary, classClear, classWhite, className) }
      { ...allProps }
    >
      { children }
    </button>
  )
}
