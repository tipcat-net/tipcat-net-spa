import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getMemberFinish,
  getMemberError,
  createMember,
} from '../../ducks/member/actions';

export default function* getMemberRequest() {
  try {
    const response = yield call(fetchers.getMember);
    yield put(getMemberFinish(response));
  } catch (error) {
    if(error.response && error.response.data.status === 404) {
      yield put(createMember());
    } else {
      yield put(getMemberError(error));
    }
  }
}