import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  createPaymentFinish,
  createPaymentError,
} from '../../ducks/payment/actions';

export default function* createPaymentRequest({ payload }) {
  try {
    const response = yield call(fetchers.createPayment, payload);
    yield put(createPaymentFinish(response));
  } catch (error) {
    yield put(createPaymentError(error));
  }
}
