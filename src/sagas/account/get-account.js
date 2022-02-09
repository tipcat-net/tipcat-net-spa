import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getAccountFinish,
  getAccountError,
} from '../../ducks/account/actions';

export default function* getAccountRequest({ payload }) {
  try {
    const response = yield call(fetchers.getAccount, payload);

    yield put(getAccountFinish(response));
  } catch (error) {
    yield put(getAccountError({ ...error.response, ...error.request }));
  }
}
