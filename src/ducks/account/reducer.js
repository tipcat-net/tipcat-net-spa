import { AccountActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case AccountActionTypes.ADD_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case AccountActionTypes.ADD_ACCOUNT_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case AccountActionTypes.ADD_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case AccountActionTypes.GET_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case AccountActionTypes.GET_ACCOUNT_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case AccountActionTypes.GET_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case AccountActionTypes.UPDATE_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case AccountActionTypes.UPDATE_ACCOUNT_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case AccountActionTypes.UPDATE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case AccountActionTypes.UPDATE_AVATAR_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case AccountActionTypes.UPDATE_AVATAR_ACCOUNT_FINISH:
      return {
        ...state,
        data: {
          ...state.data,
          avatarUrl: `${action.response.data}?${Date.now()}`,
        },
        loading: false,
      };
    case AccountActionTypes.UPDATE_AVATAR_ACCOUNT_ERROR:
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
