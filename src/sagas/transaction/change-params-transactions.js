import { put } from 'redux-saga/effects';

import { getTransactions } from '../../ducks/transaction/actions';

export default function* changeParamsTransactionsRequest({ payload }) {
  yield put(getTransactions(payload));
}
