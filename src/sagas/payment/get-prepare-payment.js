import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  getPreparePaymentFinish,
  getPreparePaymentError,
} from '../../ducks/payment/actions';

export default function* getPreparePaymentRequest({ payload }) {
  try {
    const response = yield call(fetchers.getPreparePayment, payload);
    yield put(getPreparePaymentFinish(response));
  } catch (error) {
    yield put(getPreparePaymentError(error));
  }
}
