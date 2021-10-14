import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getFacilitySlimFinish,
  getFacilitySlimError,
} from '../../ducks/facility/actions';

export default function* getFacilitySlimRequest({ payload }) {
  try {
    const response = yield call(fetchers.getFacilitySlim, payload);
    yield put(getFacilitySlimFinish(response));
  } catch (error) {
    yield put(getFacilitySlimError(error));
  }
}
