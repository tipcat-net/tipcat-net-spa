import style from './styles.module.scss';

export const ProfileName= ({ children }) => {
  return (
    <div className={ style.profileName }>{ children }</div>
  )
}
