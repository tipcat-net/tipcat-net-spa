import { Button } from '../../ui/Button';
import { Pen } from '../../ui/Icons';
import style from './styles.module.scss';

export const ProfileTop= ({ toggleVisibleSubstrate }) => {
  return (
    <div className={ style.profileTop }>
      <Button
        clear
        className={ style.profileTopBtnEdit }
        onClick={ toggleVisibleSubstrate }>
        <Pen className={ style.profileTopBtnEditIcon } />
      </Button>
    </div>
  )
}
