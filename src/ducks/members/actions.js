import { MembersActionTypes } from './action-types';

//getMembers
export const getMembers = () => ({
    type: MembersActionTypes.GET_MEMBERS_START,
});
export const getMembersError = (error) => ({
    type: MembersActionTypes.GET_MEMBERS_ERROR,
    error,
});
export const getMemberFinish = (response) => ({
    type: MembersActionTypes.GET_MEMBERS_FINISH,
    response,
});

// //createMember
// export const createMember = () => ({
//     type: MemberActionTypes.CREATE_MEMBER_START,
// });
// export const createMemberError = (error) => ({
//     type: MemberActionTypes.CREATE_MEMBER_ERROR,
//     error,
// });
// export const createMemberFinish = (response) => ({
//     type: MemberActionTypes.CREATE_MEMBER_FINISH,
//     response,
// });

// //getMemberById
// export const getMemberById = (payload) => ({
//     type: MemberActionTypes.GET_MEMBER_BY_ID_START,
//     payload
// });
// export const getMemberByIdError = (error) => ({
//     type: MemberActionTypes.GET_MEMBER_BY_ID_ERROR,
//     error,
// });
// export const getMemberByIdFinish = (response) => ({
//     type: MemberActionTypes.GET_MEMBER_BY_ID_FINISH,
//     response,
// });

// //updateMember
// export const updateMember = (payload) => ({
//     type: MemberActionTypes.UPDATE_MEMBER_START,
//     payload
// });
// export const updateMemberError = (error) => ({
//     type: MemberActionTypes.UPDATE_MEMBER_ERROR,
//     error,
// });
// export const updateMemberFinish = (response) => ({
//     type: MemberActionTypes.UPDATE_MEMBER_FINISH,
//     response,
// });