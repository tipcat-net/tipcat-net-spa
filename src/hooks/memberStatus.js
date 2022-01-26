import { InvitationState } from '../constants/InvitationState';
import { MemberStatus } from '../constants/MemberStatus';

export function useMemberStatus(member) {
  if(!member) {
    return null;
  }

  if (member.invitationState === InvitationState.NotSent || member.invitationState === InvitationState.Sent) {
    return MemberStatus.Invited;
  }

  if (member.isActive) {
    return MemberStatus.Active;
  }

  return MemberStatus.Deactivated;
}
