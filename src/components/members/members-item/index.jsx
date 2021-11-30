import { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from "react-i18next";
import { Button } from '../../ui/Button';
import { Actions } from '../../ui/Icons';
import { Avatar } from '../../avatar';
import style from './styles.module.scss';

export const MembersItem = ({ data }) => {
  const [visibleActions, setVisibleActions] = useState(false);
  const { t } = useTranslation();

  const toggleVisibleActions = () => {
    setVisibleActions(!visibleActions);
  }

  const avatarData = () => ({
    text: `${data.firstName} ${data.lastName}`,
    url: data.avatarUrl
  });

  return (
    <div className={ style.membersItem }>
      <Avatar type="active" data={ avatarData() } />
      <div className={ style.membersItemInfo }>
        <div className={ style.membersItemName }>{ data.firstName } { data.lastName }</div>
        <div className={ style.membersItemPosition }>{ data.position }</div>
      </div>
      <div className={ style.membersItemActions }>
        <div className={ cn(style.membersItemActionsBlock, visibleActions ? style.membersItemActionsBlockVisible : null) }>
          <div className={ style.membersItemActionsBlockLink }>{ t('memberItemActionBlock.editName') }</div>
          <div className={ style.membersItemActionsBlockLink }>{ t('memberItemActionBlock.editPosition') }</div>
          <div className={ style.membersItemActionsBlockLink }>{ t('memberItemActionBlock.deactivated') }</div>
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
