import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Button = ({ children, className, href, type, draggable, primary, borderNone, icon: Icon, clear, white, whiteActive, ...allProps }) => {
  const classPrimary = primary ? styles.buttonPrimary : null;
  const classClear = clear ? styles.buttonClear : null;
  const classBorderNone = borderNone ? styles.buttonBorderNone : null;
  const classIcon = Icon ? styles.buttonIcon : null;
  const classWhite = white ? styles.buttonWhite : null;
  const classWhiteActive = whiteActive ? styles.buttonWhiteActive : null;

  if (href) {
    return (
      <Link
        to={ href }
        className={ cn(styles.button, classClear, classBorderNone, classIcon, classPrimary, classWhite, classWhiteActive, className) }
        draggable={ draggable ? draggable : false }
        { ...allProps }
      >
        { Icon ? <Icon className={ styles.icon } /> : null }
        <span className={ styles.content }>{ children }</span>
      </Link>
    );
  }

  return (
    <button
      type={ type ? type : 'button' }
      className={ cn(styles.button, classClear, classBorderNone, classIcon, classPrimary, classWhite, className) }
      { ...allProps }
    >
      { Icon ? <Icon className={ styles.icon } /> : null }
      <span className={ styles.content }>{ children }</span>
    </button>
  );
};
