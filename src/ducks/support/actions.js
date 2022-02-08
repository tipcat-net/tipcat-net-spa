import { SupportActionTypes } from './action-types';

export const requestSupport = (payload, callback) => ({
  type: SupportActionTypes.REQUEST_SUPPORT_START,
  payload,
  callback,
});
export const requestSupportFinish = (response) => ({
  type: SupportActionTypes.REQUEST_SUPPORT_FINISH,
  response,
});
export const requestSupportError = (error) => ({
  type: SupportActionTypes.REQUEST_SUPPORT_ERROR,
  error,
});
