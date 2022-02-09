import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';
import { getAccount } from '../../ducks/account/actions';

import {
  updateAvatarMemberFinish,
  updateAvatarMemberError,
} from '../../ducks/member/actions';

export default function* updateAvatarMemberRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.updateAvatarMember, payload);

    yield put(updateAvatarMemberFinish(response));
    yield put(getAccount(payload.accountId));

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(updateAvatarMemberError(error));
  }
}
