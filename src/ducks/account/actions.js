import { AccountActionTypes } from './action-types';

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

export const updateAccount = (payload, callback) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_START,
    payload,
    callback
});
export const updateAccountError = (error) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_ERROR,
    error,
});
export const updateAccountFinish = (response) => ({
    type: AccountActionTypes.UPDATE_ACCOUNT_FINISH,
    response,
});

export const updateAvatarAccount = (payload, callback) => ({
    type: AccountActionTypes.UPDATE_AVATAR_ACCOUNT_START,
    payload,
    callback
});
export const updateAvatarAccountError = (error) => ({
    type: AccountActionTypes.UPDATE_AVATAR_ACCOUNT_ERROR,
    error,
});
export const updateAvatarAccountFinish = (response) => ({
    type: AccountActionTypes.UPDATE_AVATAR_ACCOUNT_FINISH,
    response,
});
