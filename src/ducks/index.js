import { combineReducers } from 'redux';

import { appReducer } from './app/reducer';
import { memberReducer } from './member/reducer';
import { accountReducer } from './account/reducer';
import { facilityReducer } from './facility/reducer';

export const rootReducer = () => combineReducers({
  app: appReducer,
  member: memberReducer,
  account: accountReducer,
  facility: facilityReducer,
});
