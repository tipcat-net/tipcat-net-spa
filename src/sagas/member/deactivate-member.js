import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  deactivateMemberFinish,
  deactivateMemberError,
} from '../../ducks/member/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* deactivateMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.deactivateMember, payload);

    yield put(deactivateMemberFinish(response));
    yield put(getAccount(response.data.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(deactivateMemberError(error));
  }
}
