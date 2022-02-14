import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addFacilityFinish,
  addFacilityError,
  addAvatarFacility,
} from '../../ducks/facility/actions';

export default function* addFacilityRequest({ payload, callback }) {
  try {
    const { avatar, useAccountAvatar, ...addFacilityPayload } = payload;
    const response = yield call(fetchers.addFacility, addFacilityPayload);

    if (useAccountAvatar || avatar) {
      const addAvatarFacilityPayload = {
        id: response.data.id,
        accountId: response.data.accountId,
        params: {},
        data: {},
      };

      if (useAccountAvatar) {
        addAvatarFacilityPayload.params = { useParent: true };
      } else {
        addAvatarFacilityPayload.data = { File: avatar };
      }

      yield put(addFacilityFinish(response));
      yield put(addAvatarFacility(addAvatarFacilityPayload, callback));
    } else {
      callback();
      yield put(addFacilityFinish(response));
    }
  } catch (error) {
    yield put(addFacilityError(error));
  }
}
