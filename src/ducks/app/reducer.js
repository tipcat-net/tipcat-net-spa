import { AppActionTypes } from './action-types';

export const initialState = {
  loading: {
    signUp: false,
    signUpMember: false,
    signUpAccount: false,
    signIn: false,
  },
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    // signUp
    case AppActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: {
          ...state.loading,
          signUp: true,
          // signUpMember: true,
          // signUpAccount: true,
        }
      };
    case AppActionTypes.SIGN_UP_ERROR:
    case AppActionTypes.SIGN_UP_FINISH:
      return {
        ...state,
        loading: {
          ...state.loading,
          signUp: false,
          // signUpMember: false,
          // signUpAccount: false,
        }
      };
    // // signUpMember
    // case AppActionTypes.SIGN_UP_MEMBER_START:
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       signUpMember: false,
    //     }
    //   };
    // case AppActionTypes.SIGN_UP_MEMBER_ERROR:
    // case AppActionTypes.SIGN_UP_MEMBER_FINISH:
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       signUpMember: false,
    //       signUpAccount: false,
    //     }
    //   };

    // signIn
    case AppActionTypes.SIGN_IN_START:
      return {
        ...state,
        loading: {
          ...state.loading,
          signIn: true
        }
      };
    case AppActionTypes.SIGN_IN_ERROR:
    case AppActionTypes.SIGN_IN_FINISH:
      return {
        ...state,
        loading: {
          ...state.loading,
          signIn: false
        }
      };

    default: {
      return state;
    }
  }
}