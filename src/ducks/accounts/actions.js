import { AccountsActionTypes } from './action-types';

export const addAccount = (payload) => ({
    type: AccountsActionTypes.ADD_ACCOUNT_START,
    payload,
});

export const addAccountError = (error) => ({
    type: AccountsActionTypes.ADD_ACCOUNT_ERROR,
    error,
});

export const addAccountFinish = (response) => ({
    type: AccountsActionTypes.ADD_ACCOUNT_FINISH,
    response,
});