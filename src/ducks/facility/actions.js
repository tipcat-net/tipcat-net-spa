import { FacilityActionTypes } from './action-types';

export const getFacilities = (payload) => ({
  type: FacilityActionTypes.GET_FACILITIES,
  payload,
});
export const getFacilitiesFinish = (response) => ({
  type: FacilityActionTypes.GET_FACILITIES_FINISH,
  response,
});
export const getFacilitiesError = (error) => ({
  type: FacilityActionTypes.GET_FACILITIES_ERROR,
  error,
});

export const addFacility = (payload, callback) => ({
  type: FacilityActionTypes.ADD_FACILITY_START,
  payload,
  callback,
});
export const addFacilityFinish = (response) => ({
  type: FacilityActionTypes.ADD_FACILITY_FINISH,
  response,
});
export const addFacilityError = (error) => ({
  type: FacilityActionTypes.ADD_FACILITY_ERROR,
  error,
});

export const addAvatarFacility = (payload, callback) => ({
  type: FacilityActionTypes.ADD_AVATAR_FACILITY_START,
  payload,
  callback,
});
export const addAvatarFacilityFinish = (response) => ({
  type: FacilityActionTypes.ADD_AVATAR_FACILITY_FINISH,
  response,
});
export const addAvatarFacilityError = (error) => ({
  type: FacilityActionTypes.ADD_AVATAR_FACILITY_ERROR,
  error,
});

export const updateFacility = (payload, callback) => ({
  type: FacilityActionTypes.UPDATE_FACILITY_START,
  payload,
  callback,
});
export const updateFacilityFinish = (response) => ({
  type: FacilityActionTypes.UPDATE_FACILITY_FINISH,
  response,
});
export const updateFacilityError = (error) => ({
  type: FacilityActionTypes.UPDATE_FACILITY_ERROR,
  error,
});

export const updateAvatarFacility = (payload, callback) => ({
  type: FacilityActionTypes.UPDATE_AVATAR_FACILITY_START,
  payload,
  callback,
});
export const updateAvatarFacilityFinish = (response) => ({
  type: FacilityActionTypes.UPDATE_AVATAR_FACILITY_FINISH,
  response,
});
export const updateAvatarFacilityError = (error) => ({
  type: FacilityActionTypes.UPDATE_AVATAR_FACILITY_ERROR,
  error,
});
