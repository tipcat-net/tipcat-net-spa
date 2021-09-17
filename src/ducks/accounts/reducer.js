import { AccountsActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function accountsReducer(state = initialState, action) {
  switch (action.type) {
    case AccountsActionTypes.ADD_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case AccountsActionTypes.ADD_ACCOUNT_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case AccountsActionTypes.ADD_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default: {
      return state;
    }
  }
}