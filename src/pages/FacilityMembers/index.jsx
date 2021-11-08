import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Members } from "../../components/members";

import { getFacility } from "../../ducks/facility/actions";
import { selectFacility, selectFacilityLoading } from "../../ducks/facility/selectors";
import { selectMember } from "../../ducks/member/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from 'react-router';
import { useEffect } from "react";

export const FacilityMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const { params: { facilityId } } = useRouteMatch();
  const facility = useSelector(selectFacility);
  const facilityLoading = useSelector(selectFacilityLoading);

  useEffect(() => {
    if (member && !facilityLoading && !facility) {
      put(getFacility({ accountId: member.accountId, facilityId }));
    }
  }, [member]);

  return (
    <Layout title={ t('facilityMembers.headerTitle') }>
      {
        facility && <Members members={ facility.members } />
      }
    </Layout>
  )
}

export default FacilityMembers;
