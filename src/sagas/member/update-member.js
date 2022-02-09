import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateMemberFinish,
  updateMemberError,
} from '../../ducks/member/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* updateMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateMember, payload);

    yield put(updateMemberFinish(response));
    yield put(getAccount(response.data.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(updateMemberError(error));
  }
}
