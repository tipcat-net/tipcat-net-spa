import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  signUpFinish,
  signUpError,
} from '../../ducks/app/actions';

export default function* signUpRequest({ payload }) {
  try {
    const response = yield call(fetchers.addAccount, payload.account);

    yield call(fetchers.updateMember, { ...payload.member, accountId: response.data.id });
    yield put(signUpFinish());
  } catch (error) {
    yield put(signUpError(error));
  }
}