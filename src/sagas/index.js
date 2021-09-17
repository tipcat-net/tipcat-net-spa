import {
  all,
  takeEvery,
} from 'redux-saga/effects';

import { MembersActionTypes } from '../ducks/members/action-types';
import { AccountsActionTypes } from '../ducks/accounts/action-types';

import getMemberRequest from './members/get-member';
import addAccountRequest from './accounts/add-account';

export default function* sagas() {
  yield all([
      // Member
      takeEvery(MembersActionTypes.GET_MEMBER_START, getMemberRequest),
      // Accounts
      takeEvery(AccountsActionTypes.ADD_ACCOUNT_START, addAccountRequest),
  ]);
}