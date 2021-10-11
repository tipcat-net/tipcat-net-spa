import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  createMemberFinish,
  createMemberError,
} from '../../ducks/member/actions';

export default function* createMemberRequest() {
  try {
    const response = yield call(fetchers.createMember);
    yield put(createMemberFinish(response));
  } catch (error) {
    yield put(createMemberError(error));
  }
}