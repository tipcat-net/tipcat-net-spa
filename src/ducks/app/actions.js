import { AppActionTypes } from './action-types';

// signIn
export const signIn = (payload) => ({
  type: AppActionTypes.SIGN_IN_START,
  payload,
});
export const signInError = (error) => ({
  type: AppActionTypes.SIGN_IN_ERROR,
  error,
});
export const signInFinish = (response) => ({
  type: AppActionTypes.SIGN_IN_FINISH,
  response,
});

// signUp
export const signUp = (payload) => ({
  type: AppActionTypes.SIGN_UP_START,
  payload,
});
export const signUpError = (error) => ({
  type: AppActionTypes.SIGN_UP_ERROR,
  error,
});
export const signUpFinish = (response) => ({
  type: AppActionTypes.SIGN_UP_FINISH,
  response,
});