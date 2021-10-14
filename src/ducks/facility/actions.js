import { FacilityActionTypes } from './action-types';

// getFacility
export const getFacility = (payload) => ({
    type: FacilityActionTypes.GET_FACILITY_START,
    payload,
});
export const getFacilityError = (error) => ({
    type: FacilityActionTypes.GET_FACILITY_ERROR,
    error,
});
export const getFacilityFinish = (response) => ({
    type: FacilityActionTypes.GET_FACILITY_FINISH,
    response,
});

// getFacilitySlim
export const getFacilitySlim = (payload) => ({
    type: FacilityActionTypes.GET_FACILITY_SLIM_START,
    payload,
});
export const getFacilitySlimError = (error) => ({
    type: FacilityActionTypes.GET_FACILITY_SLIM_ERROR,
    error,
});
export const getFacilitySlimFinish = (response) => ({
    type: FacilityActionTypes.GET_FACILITY_SLIM_FINISH,
    response,
});
