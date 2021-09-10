import { put, call } from 'redux-saga/effects';

import { fetchers } from './../../api';

import {
  getMemberFinish,
  getMemberError,
} from '../../ducks/members/actions';

export default function* getMemberRequest() {
  try {
    const response = yield call(fetchers.getMember);
    yield put(getMemberFinish(response));
  } catch (error) {
    if(error.response.data.status === 404) {
      const response = yield call(fetchers.getMamberUsingPOST);
      yield put(getMemberFinish(response));
    } else {
      yield put(getMemberError(error.response.data));
    }
  }
}