import { Avatar } from '../../avatar';
import style from './styles.module.scss';

export const ProfileAvatar= (props) => {
  return (
    <div className={ style.profileAvatar }>
      <Avatar { ...props } size="big" />
    </div>
  )
}
