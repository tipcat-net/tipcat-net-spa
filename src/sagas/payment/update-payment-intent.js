import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updatePaymentIntentFinish,
  updatePaymentIntentError,
} from '../../ducks/payment/actions';

export default function* updatePaymentIntentRequest({ payload }) {
  try {
    const response = yield call(fetchers.updatePaymentIntent, payload);

    yield put(updatePaymentIntentFinish(response));
  } catch (error) {
    yield put(updatePaymentIntentError(error));
  }
}
