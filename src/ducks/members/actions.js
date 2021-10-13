import { MembersActionTypes } from './action-types';

//getMembers
export const getMembers = (payload) => ({
    type: MembersActionTypes.GET_MEMBERS_START,
    payload,
});
export const getMembersError = (error) => ({
    type: MembersActionTypes.GET_MEMBERS_ERROR,
    error,
});
export const getMembersFinish = (response) => ({
    type: MembersActionTypes.GET_MEMBERS_FINISH,
    response,
});
