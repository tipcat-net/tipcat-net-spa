import { Button } from '../../ui/Button';
import { Actions } from '../../ui/Icons';
import style from './styles.module.scss';

export const MembersItem = () => {
  return (
    <div className={ style.membersItem }>
      <div className={ style.membersItemAvatar }>
        <span className={ style.membersItemAvatarText }>NA</span>
      </div>
      <div className={ style.membersItemInfo }>
        <div className={ style.membersItemName }>Nicholas Angel</div>
        <div className={ style.membersItemPermissions }>senior waiter</div>
      </div>
      <div className={ style.membersItemActions }>
        <Button transparent className={ style.membersItemActionsBtn }>
          <Actions />
        </Button>
      </div>
    </div>
  )
}