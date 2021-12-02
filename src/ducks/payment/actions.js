import { PaymentActionTypes } from './action-types';

export const getPreparePayment = (payload) => ({
    type: PaymentActionTypes.GET_PREPARE_PAYMENT_START,
    payload,
});
export const getPreparePaymentFinish = (response) => ({
    type: PaymentActionTypes.GET_PREPARE_PAYMENT_FINISH,
    response,
});
export const getPreparePaymentError = (error) => ({
    type: PaymentActionTypes.GET_PREPARE_PAYMENT_ERROR,
    error,
});

export const createPayment = (payload) => ({
    type: PaymentActionTypes.CREATE_PAYMENT_START,
    payload,
});
export const createPaymentFinish = (response) => ({
    type: PaymentActionTypes.CREATE_PAYMENT_FINISH,
    response,
});
export const createPaymentError = (error) => ({
    type: PaymentActionTypes.CREATE_PAYMENT_ERROR,
    error,
});
