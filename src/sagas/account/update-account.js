import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateAccountFinish,
  updateAccountError,
} from '../../ducks/account/actions';

export default function* updateAccountRequest({ payload }) {
  try {
    const response = yield call(fetchers.updateAccount, payload);

    yield put(updateAccountFinish(response));
  } catch (error) {
    yield put(updateAccountError({ ...error.response, ...error.request }));
  }
}