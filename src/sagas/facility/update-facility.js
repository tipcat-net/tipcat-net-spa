import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateFacilityFinish,
  updateFacilityError,
} from '../../ducks/facility/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* updateFacilityRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateFacility, payload);

    yield put(updateFacilityFinish(response));
    if (callback) {
      callback();
    }
    yield put(getAccount(payload.accountId));
  } catch (error) {
    yield put(updateFacilityError(error));
  }
}
