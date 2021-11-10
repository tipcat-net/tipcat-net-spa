import cn from 'classnames';

import style from './styles.module.scss';

export const Profile = ({ children, className }) => {
  return (
    <div className={ cn(style.profile, className) }>
      { children }
    </div>
  )
}
