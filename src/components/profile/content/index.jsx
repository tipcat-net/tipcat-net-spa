import style from './styles.module.scss';

export const ProfileContent = ({ children }) => {
  return (
    <div className={ style.profileContent }>{ children }</div>
  )
}
