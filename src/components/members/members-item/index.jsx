import { useState } from 'react';
import cn from 'classnames';
import { Button } from '../../ui/Button';
import { Actions } from '../../ui/Icons';
import { Avatar } from '../../avatar';
import style from './styles.module.scss';

export const MembersItem = ({ data }) => {
  const [visibleActions, setVisibleActions] = useState(false);

  const toggleVisibleActions = () => {
    setVisibleActions(!visibleActions);
  }

  return (
    <div className={ style.membersItem }>
      <Avatar type="active" data={ data.avatar } />
      <div className={ style.membersItemInfo }>
        <div className={ style.membersItemName }>{ data.name }</div>
        <div className={ style.membersItemPermissions }>{ data.position }</div>
      </div>
      <div className={ style.membersItemActions }>
        <div className={ cn(style.membersItemActionsBlock, visibleActions ? style.membersItemActionsBlockVisible : null) }>
          <div className={ style.membersItemActionsBlockLink }>Edit name</div>
          <div className={ style.membersItemActionsBlockLink }>Edit position</div>
          <div className={ style.membersItemActionsBlockLink }>Deactivated</div>
        </div>
        <Button
          clear
          className={ style.membersItemActionsBtn }
          onClick={ toggleVisibleActions }
        >
          <Actions />
        </Button>
      </div>
    </div>
  )
}
