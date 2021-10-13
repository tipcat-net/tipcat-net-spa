import { Button } from '../../ui/Button';
import { Actions } from '../../ui/Icons';
import style from './styles.module.scss';

export const MembersItem = ({ data }) => {
  return (
    <div className={ style.membersItem }>
      <div className={ style.membersItemAvatar }>
        <span className={ style.membersItemAvatarText }>{ data.image }</span>
      </div>
      <div className={ style.membersItemInfo }>
        <div className={ style.membersItemName }>{ data.name }</div>
        <div className={ style.membersItemPermissions }>{ data.position }</div>
      </div>
      <div className={ style.membersItemActions }>
        <Button clear className={ style.membersItemActionsBtn }>
          <Actions />
        </Button>
      </div>
    </div>
  )
}