import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  deleteMemberFinish,
  deleteMemberError,
} from '../../ducks/member/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* deleteMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.deleteMember, payload);

    yield put(deleteMemberFinish(response));
    yield put(getAccount(payload.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(deleteMemberError(error));
  }
}
