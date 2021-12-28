import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addAvatarMemberFinish,
  addAvatarMemberError,
} from '../../ducks/member/actions';

export default function* addAvatarMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.addAvatarMember, payload);

    callback();
    yield put(addAvatarMemberFinish(response));
  } catch (error) {
    yield put(addAvatarMemberError(error));
  }
}
