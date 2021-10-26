import cn from 'classnames';
import style from './styles.module.scss';

export const ProfileInfo = ({ data, top }) => {
  const { title, text } = data;

  return (
    <div className={ cn(style.profileInfo, top ? style.profileInfoTop : null) }>
      { title ? <div className={ style.profileInfoTitle }>{ title }</div> : null }
      { text ? <div className={ style.profileInfoText }>{ text }</div> : null }
    </div>
  )
}
