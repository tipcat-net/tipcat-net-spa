import { combineReducers } from 'redux';

import { appReducer } from './app/reducer';
import { memberReducer } from './member/reducer';
import { membersReducer } from './members/reducer';
import { accountReducer } from './account/reducer';

export const rootReducer = () => combineReducers({
  app: appReducer,
  member: memberReducer,
  members: membersReducer,
  account: accountReducer,
});
