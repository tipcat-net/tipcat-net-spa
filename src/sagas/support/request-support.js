import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import { requestSupportError } from '../../ducks/support/actions';

export default function* requestSupportRequest({ payload, callback }) {
  try {
    yield call(fetchers.requestSupport, payload);

    if(callback) {
      callback();
    }
  } catch (error) {
    yield put(requestSupportError(error));
  }
}
