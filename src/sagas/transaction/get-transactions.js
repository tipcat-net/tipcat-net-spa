import { put, call, select } from 'redux-saga/effects';

import { fetchers } from '../../api';

import { getTransactionsFinish, getTransactionsError } from '../../ducks/transaction/actions';
import { selectTransactionParams } from '../../ducks/transaction/selectors';

export default function* getTransactionsRequest({ payload }) {
  try {
    const params = yield select(selectTransactionParams);
    const response = yield call(fetchers.getTransactions, {
      ...params,
      ...payload,
    });

    yield put(getTransactionsFinish(response));
  } catch (error) {
    yield put(getTransactionsError(error));
  }
}
