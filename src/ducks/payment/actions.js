import { PaymentActionTypes } from './action-types';

export const getPayment = (payload) => ({
  type: PaymentActionTypes.GET_PAYMENT_START,
  payload,
});
export const getPaymentFinish = (response) => ({
  type: PaymentActionTypes.GET_PAYMENT_FINISH,
  response,
});
export const getPaymentError = (error) => ({
  type: PaymentActionTypes.GET_PAYMENT_ERROR,
  error,
});

export const createPaymentIntent = (payload) => ({
  type: PaymentActionTypes.CREATE_PAYMENT_INTENT_START,
  payload,
});
export const createPaymentIntentFinish = (response) => ({
  type: PaymentActionTypes.CREATE_PAYMENT_INTENT_FINISH,
  response,
});
export const createPaymentIntentError = (error) => ({
  type: PaymentActionTypes.CREATE_PAYMENT_INTENT_ERROR,
  error,
});

export const capturePayment = (payload, callback) => ({
  type: PaymentActionTypes.CAPTURE_PAYMENT_START,
  payload,
  callback,
});
export const capturePaymentFinish = (response) => ({
  type: PaymentActionTypes.CAPTURE_PAYMENT_FINISH,
  response,
});
export const capturePaymentError = (error) => ({
  type: PaymentActionTypes.CAPTURE_PAYMENT_ERROR,
  error,
});

export const updatePayment = (payload) => ({
  type: PaymentActionTypes.UPDATE_PAYMENT,
  payload,
});

export const updatePaymentIntent = (payload) => ({
  type: PaymentActionTypes.UPDATE_PAYMENT_INTENT_START,
  payload,
});
export const updatePaymentIntentFinish = (response) => ({
  type: PaymentActionTypes.UPDATE_PAYMENT_INTENT_FINISH,
  response,
});
export const updatePaymentIntentError = (error) => ({
  type: PaymentActionTypes.UPDATE_PAYMENT_INTENT_ERROR,
  error,
});
