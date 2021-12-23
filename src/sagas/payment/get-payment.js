import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getPaymentFinish,
  getPaymentError,
} from '../../ducks/payment/actions';

export default function* getPaymentRequest({ payload }) {
  try {
    const response = yield call(fetchers.getPayment, payload);

    yield put(getPaymentFinish(response));
  } catch (error) {
    yield put(getPaymentError(error));
  }
}
