import { put, call } from 'redux-saga/effects';

import { fetchers } from '../../api';

import {
  updatePaymentFinish,
  updatePaymentError,
} from '../../ducks/payment/actions';

export default function* updatePaymentRequest({ payload }) {
  try {
    const response = yield call(fetchers.updatePayment, payload);

    yield put(updatePaymentFinish(response));
  } catch (error) {
    yield put(updatePaymentError(error));
  }
}
