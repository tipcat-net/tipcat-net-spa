import { AccountActionTypes } from './action-types';

//addAccount
export const addAccount = (payload) => ({
    type: AccountActionTypes.ADD_ACCOUNT_START,
    payload,
});
export const addAccountError = (error) => ({
    type: AccountActionTypes.ADD_ACCOUNT_ERROR,
    error,
});
export const addAccountFinish = (response) => ({
    type: AccountActionTypes.ADD_ACCOUNT_FINISH,
    response,
});

//getAccount
export const getAccount = (payload) => ({
    type: AccountActionTypes.GET_ACCOUNT_START,
    payload,
});
export const getAccountError = (error) => ({
    type: AccountActionTypes.GET_ACCOUNT_ERROR,
    error,
});
export const getAccountFinish = (response) => ({
    type: AccountActionTypes.GET_ACCOUNT_FINISH,
    response,
});

//updateAccount
export const updateAccount = (payload) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_START,
    payload,
});
export const updateAccountError = (error) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_ERROR,
    error,
});
export const updateAccountFinish = (response) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_FINISH,
    response,
});