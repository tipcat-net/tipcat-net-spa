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
import addAvatarMemberRequest from './member/add-avatar-member';
import getMemberRequest from './member/get-member';
import createMemberRequest from './member/create-member';
import updateMemberRequest from './member/update-member';
import updateAvatarMemberRequest from './member/update-avatar-member';
import deleteMemberRequest from './member/delete-member';

// Accounts
import { AccountActionTypes } from '../ducks/account/action-types';
import addAccountRequest from './account/add-account';
import getAccountRequest from './account/get-account';
import updateAccountRequest from './account/update-account';
import updateAvatarAccountRequest from './account/update-avatar-account';
import deactivateMemberRequest from './member/deactivate-member';
import activateMemberRequest from './member/activate-member';
import transferMemberRequest from './member/transfer-member';

// Facility
import { FacilityActionTypes } from '../ducks/facility/action-types';
import getFacilitiesRequest from './facility/get-facilities';
import addFacilityRequest from './facility/add-facility';
import addAvatarFacilityRequest from './facility/add-avatar-facility';
import updateFacilityRequest from './facility/update-facility';
import updateAvatarFacilityRequest from './facility/update-avatar-facility';

import { PaymentActionTypes } from '../ducks/payment/action-types';
import getPaymentRequest from './payment/get-payment';
import createPaymentIntentRequest from './payment/create-payment-intent';
import capturePaymentRequest from './payment/capture-payment';
import updatePaymentIntentRequest from './payment/update-payment-intent';

import { TransactionActionTypes } from '../ducks/transaction/action-types';
import getTransactionsRequest from './transaction/get-transactions';
import changeParamsTransactionsRequest from './transaction/change-params-transactions';

import { SupportActionTypes } from '../ducks/support/action-types';
import requestSupportRequest from './support/request-support';

export default function* sagas() {
  yield all([
    // SignUp
    takeEvery(AppActionTypes.SIGN_UP_START, signUpRequest),
    takeEvery(AppActionTypes.SIGN_UP_FINISH, getMemberRequest),
    // Member
    takeEvery(MemberActionTypes.ADD_MEMBER_START, addMemberRequest),
    takeEvery(MemberActionTypes.ADD_AVATAR_MEMBER_START, addAvatarMemberRequest),
    takeEvery(MemberActionTypes.GET_MEMBER_START, getMemberRequest),
    takeEvery(MemberActionTypes.CREATE_MEMBER_START, createMemberRequest),
    takeEvery(MemberActionTypes.UPDATE_MEMBER_START, updateMemberRequest),
    takeEvery(MemberActionTypes.UPDATE_AVATAR_MEMBER_START, updateAvatarMemberRequest),
    takeEvery(MemberActionTypes.DELETE_MEMBER_START, deleteMemberRequest),
    takeEvery(MemberActionTypes.DEACTIVATE_MEMBER_START, deactivateMemberRequest),
    takeEvery(MemberActionTypes.ACTIVATE_MEMBER_START, activateMemberRequest),
    takeEvery(MemberActionTypes.TRANSFER_MEMBER_START, transferMemberRequest),
    // Accounts
    takeEvery(AccountActionTypes.ADD_ACCOUNT_START, addAccountRequest),
    takeEvery(AccountActionTypes.GET_ACCOUNT_START, getAccountRequest),
    takeEvery(AccountActionTypes.UPDATE_ACCOUNT_START, updateAccountRequest),
    takeEvery(AccountActionTypes.UPDATE_AVATAR_ACCOUNT_START, updateAvatarAccountRequest),
    // Facility
    takeEvery(FacilityActionTypes.GET_FACILITIES, getFacilitiesRequest),
    takeEvery(FacilityActionTypes.ADD_FACILITY_START, addFacilityRequest),
    takeEvery(FacilityActionTypes.ADD_AVATAR_FACILITY_START, addAvatarFacilityRequest),
    takeEvery(FacilityActionTypes.UPDATE_FACILITY_START, updateFacilityRequest),
    takeEvery(FacilityActionTypes.UPDATE_AVATAR_FACILITY_START, updateAvatarFacilityRequest),
    // Payment
    takeEvery(PaymentActionTypes.GET_PAYMENT_START, getPaymentRequest),
    takeEvery(PaymentActionTypes.CREATE_PAYMENT_INTENT_START, createPaymentIntentRequest),
    takeEvery(PaymentActionTypes.CAPTURE_PAYMENT_START, capturePaymentRequest),
    takeEvery(PaymentActionTypes.UPDATE_PAYMENT_INTENT_START, updatePaymentIntentRequest),
    // Transaction
    takeEvery(TransactionActionTypes.GET_TRANSACTIONS_START, getTransactionsRequest),
    takeEvery(TransactionActionTypes.CHANGE_PARAMS_TRANSACTIONS, changeParamsTransactionsRequest),
    // Support
    takeEvery(SupportActionTypes.REQUEST_SUPPORT_START, requestSupportRequest),
  ]);
}
