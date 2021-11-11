import { FacilityActionTypes } from './action-types';

export const addFacility = (payload, callback) => ({
    type: FacilityActionTypes.ADD_FACILITY_START,
    payload,
    callback
});
export const addFacilityFinish = (response) => ({
    type: FacilityActionTypes.ADD_FACILITY_FINISH,
    response,
});
export const addFacilityError = (error) => ({
    type: FacilityActionTypes.ADD_FACILITY_ERROR,
    error,
});