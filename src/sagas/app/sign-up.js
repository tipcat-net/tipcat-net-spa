import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  signUpFinish,
  signUpError,
} from '../../ducks/app/actions';

export default function* signUpRequest({ payload }) {
  try {
    yield call(fetchers.updateMember, payload.member);
    yield call(fetchers.addAccount, payload.account);
    yield put(signUpFinish());
  } catch (error) {
    yield put(signUpError(error));
  }
}