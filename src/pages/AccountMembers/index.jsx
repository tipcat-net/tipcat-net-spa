import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Members } from "../../components/members";

import { getMembers } from "../../ducks/members/actions";
import { selectMembers } from "../../ducks/members/selectors";
import { selectMember } from "../../ducks/member/selectors";

export const AccountMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const members = useSelector(selectMembers);

  useEffect(() => {
    if (!members && member) {
      put(getMembers({ accountId: member.accountId }));
    }
  }, [member]);

  return (
    <Layout title={ t('members.headerTitle') }>
      {
        members && <Members members={ members } />
      }
    </Layout>
  )
}

export default AccountMembers;
