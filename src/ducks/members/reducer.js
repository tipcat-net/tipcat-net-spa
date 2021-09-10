import { MembersActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function membersReducer(state = initialState, action) {
  switch (action.type) {
    case MembersActionTypes.GET_MEMBER_START:
      return {
        ...state,
        loading: true,
      };
    case MembersActionTypes.GET_MEMBER_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case MembersActionTypes.GET_MEMBER_ERROR:
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