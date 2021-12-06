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

export const updatePayment = (payload) => ({
    type: PaymentActionTypes.UPDATE_PAYMENT_START,
    payload,
});
export const updatePaymentFinish = (response) => ({
    type: PaymentActionTypes.UPDATE_PAYMENT_FINISH,
    response,
});
export const updatePaymentError = (error) => ({
    type: PaymentActionTypes.UPDATE_PAYMENT_ERROR,
    error,
});
