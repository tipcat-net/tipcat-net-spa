import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getFacilitiesFinish,
  getFacilitiesError,
} from '../../ducks/facility/actions';

export default function* getFacilitiesRequest({ payload }) {
  try {
    const response = yield call(fetchers.getFacilities, payload);
    yield put(getFacilitiesFinish(response));
  } catch (error) {
    yield put(getFacilitiesError(error));
  }
}
