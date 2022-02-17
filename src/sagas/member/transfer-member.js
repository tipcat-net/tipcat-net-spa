import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  transferMemberFinish,
  transferMemberError,
} from '../../ducks/member/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* transferMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.transferMember, payload);

    yield put(transferMemberFinish(response));
    yield put(getAccount(payload.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(transferMemberError(error));
  }
}
