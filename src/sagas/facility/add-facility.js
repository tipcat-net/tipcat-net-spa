import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addFacilityFinish,
  addFacilityError,
} from '../../ducks/facility/actions';

export default function* addFacilityRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.addFacility, payload);
    callback();
    yield put(addFacilityFinish(response));
  } catch (error) {
    yield put(addFacilityError(error));
  }
}
