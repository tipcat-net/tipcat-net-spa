import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateAvatarAccountFinish,
  updateAvatarAccountError,
} from '../../ducks/account/actions';

export default function* updateAvatarAccountRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateAvatarAccount, payload);
    callback();
    yield put(updateAvatarAccountFinish(response));
  } catch (error) {
    yield put(updateAvatarAccountError(error));
  }
}
