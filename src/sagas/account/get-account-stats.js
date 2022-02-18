import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getAccountStatsFinish,
  getAccountStatsError,
} from '../../ducks/account/actions';

export default function* getAccountStatsRequest({ payload }) {
  try {
    console.log(payload);
    const response = yield call(fetchers.getAccountStats, payload);

    yield put(getAccountStatsFinish(response));
  } catch (error) {
    yield put(getAccountStatsError({ ...error.response, ...error.request }));
  }
}
