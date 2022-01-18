import { TransactionActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  lastPage: false,
  params: {},
  error: null,
};

const checkedLastPage = (data) => {
  if (data && data.length === 0) {
    return true;
  }

  return false;
};

const loadData = (state, data) => {
  if (state.data && state.params.skip && state.params.skip !== 0) {
    return [...state.data, ...data];
  }

  return data;
};

export function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case TransactionActionTypes.GET_TRANSACTIONS_START:
      return {
        ...state,
        loading: true,
        params: {
          ...state.params,
          ...action.payload,
        },
      };
    case TransactionActionTypes.GET_TRANSACTIONS_FINISH:
      return {
        ...state,
        loading: false,
        lastPage: checkedLastPage(action.response.data),
        data: loadData(state, action.response.data),
      };
    case TransactionActionTypes.GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case TransactionActionTypes.CHANGE_PARAMS_TRANSACTIONS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.payload,
        },
      };

    default: {
      return state;
    }
  }
}
