import { MembersActionTypes } from './action-types';

export const getMember = () => ({
    type: MembersActionTypes.GET_MEMBER_START,
});

export const getMemberError = (error) => ({
    type: MembersActionTypes.GET_MEMBER_ERROR,
    error,
});

export const getMemberFinish = (response) => ({
    type: MembersActionTypes.GET_MEMBER_FINISH,
    response,
});