import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectMember } from '../../ducks/member/selectors';

import { getAccount } from '../../ducks/account/actions';
import { selectAccount, selectAccountLoading } from '../../ducks/account/selectors';

import Spinner from '../spinner';

export const Account = () => {
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const loading = useSelector(selectAccountLoading);

  useEffect(() => {
    put(getAccount(member.accountId));
  }, []);

  if(loading) {
    <Spinner />
  }

  if(!account) {
    return <h1>Account</h1> 
  }
  
  return (
    <div>
      <h1>Account</h1>
      <p>address: {account.address}</p>
      <p>commercialName: {account.commercialName}</p>
      <p>email: {account.email}</p>
      <p>name: {account.name}</p>
      <p>phone: {account.phone}</p>
    </div>
    
  )
}

export default Account;