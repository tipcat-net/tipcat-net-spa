import { MemberActionTypes } from './action-types';

export const addMember = (payload, callback) => ({
  type: MemberActionTypes.ADD_MEMBER_START,
  payload,
  callback,
});
export const addMemberError = (error) => ({
  type: MemberActionTypes.ADD_MEMBER_ERROR,
  error,
});
export const addMemberFinish = (response) => ({
  type: MemberActionTypes.ADD_MEMBER_FINISH,
  response,
});

export const addAvatarMember = (payload, callback) => ({
  type: MemberActionTypes.ADD_AVATAR_MEMBER_START,
  payload,
  callback,
});
export const addAvatarMemberError = (error) => ({
  type: MemberActionTypes.ADD_AVATAR_MEMBER_ERROR,
  error,
});
export const addAvatarMemberFinish = (response) => ({
  type: MemberActionTypes.ADD_AVATAR_MEMBER_FINISH,
  response,
});

export const getMember = () => ({
  type: MemberActionTypes.GET_MEMBER_START,
});
export const getMemberError = (error) => ({
  type: MemberActionTypes.GET_MEMBER_ERROR,
  error,
});
export const getMemberFinish = (response) => ({
  type: MemberActionTypes.GET_MEMBER_FINISH,
  response,
});

export const createMember = () => ({
  type: MemberActionTypes.CREATE_MEMBER_START,
});
export const createMemberError = (error) => ({
  type: MemberActionTypes.CREATE_MEMBER_ERROR,
  error,
});
export const createMemberFinish = (response) => ({
  type: MemberActionTypes.CREATE_MEMBER_FINISH,
  response,
});

export const getMemberById = (payload) => ({
  type: MemberActionTypes.GET_MEMBER_BY_ID_START,
  payload,
});
export const getMemberByIdError = (error) => ({
  type: MemberActionTypes.GET_MEMBER_BY_ID_ERROR,
  error,
});
export const getMemberByIdFinish = (response) => ({
  type: MemberActionTypes.GET_MEMBER_BY_ID_FINISH,
  response,
});

export const updateMember = (payload, callback) => ({
  type: MemberActionTypes.UPDATE_MEMBER_START,
  payload,
  callback,
});
export const updateMemberError = (error) => ({
  type: MemberActionTypes.UPDATE_MEMBER_ERROR,
  error,
});
export const updateMemberFinish = (response) => ({
  type: MemberActionTypes.UPDATE_MEMBER_FINISH,
  response,
});

export const updateAvatarMember = (payload, callback) => ({
  type: MemberActionTypes.UPDATE_AVATAR_MEMBER_START,
  payload,
  callback,
});
export const updateAvatarMemberError = (error) => ({
  type: MemberActionTypes.UPDATE_AVATAR_MEMBER_ERROR,
  error,
});
export const updateAvatarMemberFinish = (response) => ({
  type: MemberActionTypes.UPDATE_AVATAR_MEMBER_FINISH,
  response,
});

export const deleteMember = (payload, callback) => ({
  type: MemberActionTypes.DELETE_MEMBER_START,
  payload,
  callback,
});
export const deleteMemberError = (error) => ({
  type: MemberActionTypes.DELETE_MEMBER_ERROR,
  error,
});
export const deleteMemberFinish = (response) => ({
  type: MemberActionTypes.DELETE_MEMBER_FINISH,
  response,
});

export const deactivateMember = (payload, callback) => ({
  type: MemberActionTypes.DEACTIVATE_MEMBER_START,
  payload,
  callback,
});
export const deactivateMemberError = (error) => ({
  type: MemberActionTypes.DEACTIVATE_MEMBER_FINISH,
  error,
});
export const deactivateMemberFinish = (response) => ({
  type: MemberActionTypes.DEACTIVATE_MEMBER_FINISH,
  response,
});

export const activateMember = (payload, callback) => ({
  type: MemberActionTypes.ACTIVATE_MEMBER_START,
  payload,
  callback,
});
export const activateMemberError = (error) => ({
  type: MemberActionTypes.ACTIVATE_MEMBER_ERROR,
  error,
});
export const activateMemberFinish = (response) => ({
  type: MemberActionTypes.ACTIVATE_MEMBER_FINISH,
  response,
});
