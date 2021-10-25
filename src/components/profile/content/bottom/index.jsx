import cn from 'classnames';
import { Link } from 'react-router-dom';
import style from './styles.module.scss';

export const ProfileContentBottom = ({ leftLink, email, rightLink }) => {
  return (
    <div className={ style.profileContentBottom }>
      { leftLink ? <Link to={ leftLink.link } className={ cn(style.profileContentBottomLink, style.profileContentBottomLinkLeft) }>{ leftLink.text }</Link> : null }
      { email ? <div className={ style.profileContentBottomEmail }>{ email }</div> : null }
      { rightLink ? <Link to={ rightLink.link } className={ cn(style.profileContentBottomLink, style.profileContentBottomLinkRight) }>{ rightLink.text }</Link> : null }
    </div>
  )
}
