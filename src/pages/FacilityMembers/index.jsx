import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Members } from "../../components/members";

import { getAccount } from "../../ducks/account/actions";
import { selectAccount, selectAccountLoading } from "../../ducks/account/selectors";
import { selectMember } from "../../ducks/member/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from 'react-router';
import { useEffect } from "react";

export const FacilityMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const { params: { facilityId } } = useRouteMatch();
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);

  useEffect(() => {
    if (member && !accountLoading) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  return (
    <Layout title={ t('facilityMembers.headerTitle') }>
      {
        account && <Members members={ account?.facilities.find(item => item.id === parseInt(facilityId)).members } />
      }
    </Layout>
  )
}

export default FacilityMembers;
