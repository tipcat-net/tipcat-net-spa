import { combineReducers } from 'redux';

import { membersReducer } from './members/reducer';
import { accountsReducer } from './accounts/reducer';

export const rootReducer = () => combineReducers({
  members: membersReducer,
  accounts: accountsReducer,
});