import { PaymentActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: {
    amount: 5,
    message: '',
    isServiceFee: false,
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

    case PaymentActionTypes.CREATE_PAYMENT_INTENT_START:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
        },
      };
    case PaymentActionTypes.CREATE_PAYMENT_INTENT_FINISH:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.response.data,
        },
      };
    case PaymentActionTypes.CREATE_PAYMENT_INTENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case PaymentActionTypes.UPDATE_PAYMENT:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    case PaymentActionTypes.UPDATE_PAYMENT_INTENT_START:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
        },
      };
    case PaymentActionTypes.UPDATE_PAYMENT_INTENT_FINISH:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.response.data,
        },
      };
    case PaymentActionTypes.UPDATE_PAYMENT_INTENT_ERROR:
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
