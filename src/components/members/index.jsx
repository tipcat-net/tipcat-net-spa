import React from 'react';
import { MembersItem } from './members-item';

export const Members = ({ members, openVisibleSuccess }) => members && members.map((item, index) =>
  <MembersItem
    key={ index }
    data={ item }
    openVisibleSuccess={ openVisibleSuccess }
  />,
);
