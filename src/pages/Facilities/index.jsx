import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Facility } from "../../components/facility";

import { selectMember } from "../../ducks/member/selectors";
import { getFacilities } from "../../ducks/facility/actions";
import { selectFacilities, selectFacilitiesLoading } from "../../ducks/facility/selectors";

import style from './styles.module.scss';

export const Facilities = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const facilities = useSelector(selectFacilities);
  const facilitiesLoading = useSelector(selectFacilitiesLoading);

  useEffect(() => {
    if (member && !facilitiesLoading && !facilities) {
      put(getFacilities({ accountId: member.accountId }));
    }
  }, [member]);

  return (
    <Layout title={ t('facilities.headerTitle') }>
      <div className={ style.facilities }>
        {
          facilities && facilities.map(item => <Facility key={ item.id } data={ item } />)
        }
      </div>
    </Layout>
  )
}

export default Facilities;
