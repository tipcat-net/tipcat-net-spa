import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getMemberFinish,
  getMemberError,
} from '../../ducks/member/actions';

export default function* getMemberRequest() {
  try {
    const response = yield call(fetchers.getMember);
    yield put(getMemberFinish(response));
  } catch (error) {
    if(error.response && error.response.data.status === 404) {
      const response = yield call(fetchers.createMember);
      yield put(getMemberFinish(response));
    } else {
      yield put(getMemberError(error));
    }
  }
}