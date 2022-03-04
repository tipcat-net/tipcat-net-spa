import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  createPaymentIntentFinish,
  createPaymentIntentError,
} from '../../ducks/payment/actions';

export default function* createPaymentIntentRequest({ payload }) {
  try {
    const response = yield call(fetchers.createPaymentIntent, payload);

    yield put(createPaymentIntentFinish(response));
  } catch (error) {
    yield put(createPaymentIntentError(error));
  }
}
