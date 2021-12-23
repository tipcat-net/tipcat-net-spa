import { TransactionActionTypes } from './action-types';

export const getTransactions = (payload) => ({
  type: TransactionActionTypes.GET_TRANSACTIONS_START,
  payload,
});
export const getTransactionsFinish = (response) => ({
  type: TransactionActionTypes.GET_TRANSACTIONS_FINISH,
  response,
});
export const getTransactionsError = (error) => ({
  type: TransactionActionTypes.GET_TRANSACTIONS_ERROR,
  error,
});

export const changeParamsTransactions = (payload) => ({
  type: TransactionActionTypes.CHANGE_PARAMS_TRANSACTIONS,
  payload,
});
