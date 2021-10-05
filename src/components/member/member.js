import React from 'react';
import { MemberForm } from './form';

import './member.css';

const Member = React.memo(() => {

  return (
    <>
      <MemberForm />
    </>
  );
});

export default Member;