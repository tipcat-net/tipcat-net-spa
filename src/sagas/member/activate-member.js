import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  activateMemberFinish,
  activateMemberError,
} from '../../ducks/member/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* activateMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.activateMember, payload);

    yield put(activateMemberFinish(response));
    yield put(getAccount(response.data.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(activateMemberError(error));
  }
}
