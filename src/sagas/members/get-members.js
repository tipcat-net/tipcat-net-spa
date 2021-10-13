import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getMembersFinish,
  getMembersError,
} from '../../ducks/members/actions';

export default function* getMembersRequest({ payload }) {
  try {
    const response = yield call(fetchers.getMembers, payload);
    yield put(getMembersFinish(response));
  } catch (error) {
    yield put(getMembersError(error));
  }
}
