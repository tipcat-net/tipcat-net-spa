import arrowFirstMember from './svg/arrow-first-member.svg';
import style from './styles.module.scss';

export const MembersFirstMember = () => {
  return (
    <div className={ style.membersFirstMember }>
      <div className={ style.membersFirstMemberInfo }>
        <div className={ style.membersFirstMemberInfoImage }>
          <img src={ arrowFirstMember } alt=""/>
        </div>
        <div className={ style.membersFirstMemberInfoText }>Please add <br/> members</div>
      </div>
    </div>
  );
}
