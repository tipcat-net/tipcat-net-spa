import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Members } from '../../components/members/';

import { selectMember } from "../../ducks/member/selectors";
import { getAccount } from "../../ducks/account/actions";
import { selectAccount, selectAccountLoading } from "../../ducks/account/selectors";

export const AllMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);

  useEffect(() => {
    if (member && !accountLoading) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  return (
    <Layout title={ t('allMembers.headerTitle') }>
      {
        account && account?.facilities.map(item => <Members key={ item.id } members={ item.members } />)
      }
    </Layout>
  )
}

export default AllMembers;
