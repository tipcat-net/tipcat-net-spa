import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { Facility } from "../../components/facility";

import { selectMember } from "../../ducks/member/selectors";
import { getAccount } from "../../ducks/account/actions";
import { selectAccount, selectAccountLoading } from "../../ducks/account/selectors";

import style from './styles.module.scss';

export const Facilities = () => {
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
    <Layout title={ t('facilities.headerTitle') }>
      <div className={ style.facilities }>
        {
          account && account?.facilities.map(item => <Facility key={ item.id } data={ item } />)
        }
      </div>
    </Layout>
  )
}

export default Facilities;
