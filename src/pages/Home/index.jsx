import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getMember } from '../../ducks/member/actions';
import { selectMember } from '../../ducks/member/selectors';

import { Layout } from './../../components/ui/layout';

import { ROUTES } from '../../constants/routes';

export const Home = () => {
  const put = useDispatch();
  const member = useSelector(selectMember);

  useEffect(() => {
    put(getMember());
  }, []);

  if(member && !member.accountId) {
    return <Redirect to={ ROUTES.REGISTRATION.path } />
  }

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
};

export default Home;