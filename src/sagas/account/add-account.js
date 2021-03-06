import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addAccountFinish,
  addAccountError,
} from '../../ducks/account/actions';

export default function* addAccountRequest({ payload }) {
  try {
    const response = yield call(fetchers.addAccount, payload);

    yield put(addAccountFinish(response));
  } catch (error) {
    yield put(addAccountError({ ...error.response, ...error.request }));
  }
}