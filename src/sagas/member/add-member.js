import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addMemberFinish,
  addMemberError,
} from '../../ducks/member/actions';

export default function* addMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.addMember, payload);
    callback();
    yield put(addMemberFinish(response));
  } catch (error) {
    yield put(addMemberError(error));
  }
}
