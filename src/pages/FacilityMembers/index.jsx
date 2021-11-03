import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';

import { MembersTabs } from '../../components/members/members-tabs';
import { Members } from "../../components/members";

import { getFacilitySlim } from "../../ducks/facility/actions";
import { selectFacilitySlim } from "../../ducks/facility/selectors";
import { selectMember } from "../../ducks/member/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from 'react-router';
import { useEffect } from "react";

export const FacilityMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const facilitySlim = useSelector(selectFacilitySlim);
  const { params: { facilityId } } = useRouteMatch();

  useEffect(() => {
    if (!facilitySlim && member) {
      put(getFacilitySlim({ accountId: member.accountId, facilityId }));
    }
  }, [member]);

  return (
    <Layout title={ t('members.headerTitle') }>
      {
        facilitySlim && <Members members={ facilitySlim.members } />
      }
    </Layout>
  )
}

export default FacilityMembers;
