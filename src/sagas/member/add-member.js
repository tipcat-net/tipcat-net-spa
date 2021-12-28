import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  addAvatarMember,
  addMemberFinish,
  addMemberError,
} from '../../ducks/member/actions';

export default function* addMemberRequest({ payload, callback }) {
  try {
    const { avatar, ...addMemberPayload } = payload;
    const response = yield call(fetchers.addMember, addMemberPayload);

    if (payload.avatar) {
      const addAvatarMemberPayload = {
        id: response.data.id,
        accountId: response.data.accountId,
        data: { File: avatar },
      };

      yield put(addMemberFinish(response));
      yield put(addAvatarMember(addAvatarMemberPayload, callback));
    } else {
      callback();
      yield put(addMemberFinish(response));
    }
  } catch (error) {
    yield put(addMemberError(error));
  }
}
