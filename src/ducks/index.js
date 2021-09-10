import { combineReducers } from 'redux';

import { membersReducer } from './members/reducer';

export const rootReducer = () => combineReducers({
  members: membersReducer,
});