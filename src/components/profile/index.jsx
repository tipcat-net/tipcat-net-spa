import style from './styles.module.scss';

export const Profile = ({ children }) => {
  return (
    <div className={ style.profile }>
      { children }
    </div>
  )
}
