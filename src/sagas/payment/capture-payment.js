import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  capturePaymentFinish,
  capturePaymentError,
} from '../../ducks/payment/actions';

export default function* capturePaymentRequest({ payload, callback }) {
  try {
    const response = yield call(fetchers.capturePayment, payload);

    if (callback) {
      callback();
    }
    yield put(capturePaymentFinish(response));
  } catch (error) {
    yield put(capturePaymentError(error));
  }
}
