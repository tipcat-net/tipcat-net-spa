import { FacilityActionTypes } from './action-types';

// getFacilities
export const getFacilities = (payload) => ({
    type: FacilityActionTypes.GET_FACILITIES_START,
    payload,
});
export const getFacilitiesError = (error) => ({
    type: FacilityActionTypes.GET_FACILITIES_ERROR,
    error,
});
export const getFacilitiesFinish = (response) => ({
    type: FacilityActionTypes.GET_FACILITIES_FINISH,
    response,
});

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
