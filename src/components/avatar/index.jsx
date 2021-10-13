import { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './styles.module.scss';

export const Avatar = ({ size, className }) => {
  const [classNameSize, setClassNameSize] = useState(null);

  useEffect(() => {
    switch (size) {
      case 'small':
        setClassNameSize(style.avatarSmall);
        break;
      case 'big':
        setClassNameSize(style.avatarBig);
        break;
      default:
        setClassNameSize(null);
        break;
    }
  }, []);

  return (
    <div className={ cn(style.avatar, classNameSize, className) }>
      <div className={ style.avatarText }>NA</div>
    </div>
  )
}

export default Avatar;
