import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  deleteMemberFinish,
  deleteMemberError,
} from '../../ducks/member/actions';

export default function* deleteMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.deleteMember, payload);

    callback();
    yield put(deleteMemberFinish(response));
  } catch (error) {
    yield put(deleteMemberError(error));
  }
}
