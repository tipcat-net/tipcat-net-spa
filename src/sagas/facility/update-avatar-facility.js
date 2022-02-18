import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateAvatarFacilityFinish,
  updateAvatarFacilityError,
} from '../../ducks/facility/actions';
import { getAccount } from '../../ducks/account/actions';

export default function* updateAvatarFacilityRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateAvatarFacility, payload);

    if (callback) {
      callback();
    }
    yield put(updateAvatarFacilityFinish(response));
    yield put(getAccount(payload.accountId));
  } catch (error) {
    yield put(updateAvatarFacilityError(error));
  }
}
