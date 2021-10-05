import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updateMemberFinish,
  updateMemberError,
} from '../../ducks/member/actions';

export default function* updateMemberRequest({ payload }) {
  try {
    const response = yield call(fetchers.updateMember, payload);
    yield put(updateMemberFinish(response));
  } catch (error) {
    yield put(updateMemberError(error));
  }
}