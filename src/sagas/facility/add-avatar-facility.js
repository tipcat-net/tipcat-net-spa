import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addAvatarFacilityFinish,
  addAvatarFacilityError,
} from '../../ducks/facility/actions';

export default function* addAvatarFacilityRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.addAvatarFacility, payload);

    callback();
    yield put(addAvatarFacilityFinish(response));
  } catch (error) {
    yield put(addAvatarFacilityError(error));
  }
}
