import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/ui/Layout';
import { Members } from '../../components/members/';
import { Success } from '../../components/success';

import { selectMember } from '../../ducks/member/selectors';
import { getAccount } from '../../ducks/account/actions';
import { selectAccount, selectAccountLoading } from '../../ducks/account/selectors';

import style from './styles.module.scss';

export const AllMembers = () => {
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const delayBeforeClosing = 3000;

  const closeVisibleSuccess = () => {
    setVisibleSuccess(false);
  };

  const openVisibleSuccess = () => {
    setVisibleSuccess(true);
  };

  useEffect(() => {
    if (member && !accountLoading) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  return (
    <Layout title={ t('allMembers.headerTitle') }>
      <div className={ style.members }>
        {
          account && account.facilities.map(item =>
            <Members
              key={ item.id }
              members={ item.members }
              openVisibleSuccess={ openVisibleSuccess }
            />,
          )
        }
      </div>
      <Success
        visible={ visibleSuccess }
        duration={ delayBeforeClosing }
        onClose={ closeVisibleSuccess }
        transparent={ true }
        message={ t('members.success.message') }
      />
    </Layout>
  );
};

export default AllMembers;
