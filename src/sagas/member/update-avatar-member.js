import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateAvatarMemberFinish,
  updateAvatarMemberError,
} from '../../ducks/member/actions';

export default function* updateAvatarMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateAvatarMember, payload);
    callback();
    yield put(updateAvatarMemberFinish(response));
  } catch (error) {
    yield put(updateAvatarMemberError(error));
  }
}
