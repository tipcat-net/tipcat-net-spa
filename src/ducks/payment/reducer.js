import { PaymentActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: {
    amount: 5,
    message: '',
    member: null,
    clientSecret: null,
    paymentIntentId: null,
    proFormaInvoice: null,
  },
  error: null,
};

export function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case PaymentActionTypes.GET_PAYMENT_START:
      return {
        ...state,
        loading: true,
      };
    case PaymentActionTypes.GET_PAYMENT_FINISH:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.response.data,
        },
      };
    case PaymentActionTypes.GET_PAYMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case PaymentActionTypes.CREATE_PAYMENT_START:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          amount: action.payload.tipsAmount.amount,
          message: action.payload.message,
        },
      };
    case PaymentActionTypes.CREATE_PAYMENT_FINISH:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.response.data,
        },
      };
    case PaymentActionTypes.CREATE_PAYMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case PaymentActionTypes.UPDATE_PAYMENT_START:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          amount: action.payload.tipsAmount.amount,
          message: action.payload.message,
        },
      };
    case PaymentActionTypes.UPDATE_PAYMENT_FINISH:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.response.data,
        },
      };
    case PaymentActionTypes.UPDATE_PAYMENT_ERROR:
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
