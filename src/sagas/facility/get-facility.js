import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getFacilityFinish,
  getFacilityError,
} from '../../ducks/facility/actions';

export default function* getFacilityRequest({ payload }) {
  try {
    const response = yield call(fetchers.getFacility, payload);
    yield put(getFacilityFinish(response));
  } catch (error) {
    yield put(getFacilityError(error));
  }
}
