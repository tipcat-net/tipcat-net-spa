import { MembersActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function memberReducer(state = initialState, action) {
  switch (action.type) {
    // getMembers
    case MembersActionTypes.GET_MEMBERS_START:
      return {
        ...state,
        loading: true,
      };
    case MembersActionTypes.GET_MEMBERS_FINISH:
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case MembersActionTypes.GET_MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
    // //createMember
    // case MemberActionTypes.CREATE_MEMBER_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case MemberActionTypes.CREATE_MEMBER_FINISH:
    //   return {
    //     ...state,
    //     loading: false,
    //     data: action.response.data,
    //   };
    // case MemberActionTypes.CREATE_MEMBER_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };
    
    // //getMemberById
    // case MemberActionTypes.GET_MEMBER_BY_ID_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case MemberActionTypes.GET_MEMBER_BY_ID_FINISH:
    //   return {
    //     ...state,
    //     data: action.response.data,
    //     loading: false,
    //   };
    // case MemberActionTypes.GET_MEMBER_BY_ID_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };

    // //updateMember
    // case MemberActionTypes.UPDATE_MEMBER_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case MemberActionTypes.UPDATE_MEMBER_FINISH:
    //   return {
    //     ...state,
    //     data: action.response.data,
    //     loading: false,
    //   };
    // case MemberActionTypes.UPDATE_MEMBER_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };

    default: {
      return state;
    }
  }
}