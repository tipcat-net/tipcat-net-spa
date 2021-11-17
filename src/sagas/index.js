import {
  all,
  takeEvery,
} from 'redux-saga/effects';

// SignUp
import { AppActionTypes } from '../ducks/app/action-types';
import signUpRequest from './app/sign-up';

// Member
import { MemberActionTypes } from '../ducks/member/action-types';
import addMemberRequest from './member/add-member';
import getMemberRequest from './member/get-member';
import createMemberRequest from './member/create-member';
import updateMemberRequest from './member/update-member';

// Accounts
import { AccountActionTypes } from '../ducks/account/action-types';
import addAccountRequest from './account/add-account';
import getAccountRequest from './account/get-account';
import updateAccountRequest from './account/update-account';

// Facility
import { FacilityActionTypes } from '../ducks/facility/action-types';
import addFacilityRequest from './facility/add-facility';

export default function* sagas() {
  yield all([
      // SignUp
      takeEvery(AppActionTypes.SIGN_UP_START, signUpRequest),
      takeEvery(AppActionTypes.SIGN_UP_FINISH, getMemberRequest),
      // Member
      takeEvery(MemberActionTypes.ADD_MEMBER_START, addMemberRequest),
      takeEvery(MemberActionTypes.GET_MEMBER_START, getMemberRequest),
      takeEvery(MemberActionTypes.CREATE_MEMBER_START, createMemberRequest),
      takeEvery(MemberActionTypes.UPDATE_MEMBER_START, updateMemberRequest),
      // Accounts
      takeEvery(AccountActionTypes.ADD_ACCOUNT_START, addAccountRequest),
      takeEvery(AccountActionTypes.GET_ACCOUNT_START, getAccountRequest),
      takeEvery(AccountActionTypes.UPDATE_ACCOUNT_START, updateAccountRequest),
      // Facility
      takeEvery(FacilityActionTypes.ADD_FACILITY_START, addFacilityRequest),
  ]);
}
