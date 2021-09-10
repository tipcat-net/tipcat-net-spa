import {
  all,
  takeEvery,
} from 'redux-saga/effects';

import { MembersActionTypes } from '../ducks/members/action-types';

import getMemberRequest from './members/get-member';

export default function* sagas() {
  yield all([
      // Member
      takeEvery(MembersActionTypes.GET_MEMBER_START, getMemberRequest),
  ]);
}