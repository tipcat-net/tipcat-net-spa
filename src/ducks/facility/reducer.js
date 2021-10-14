import { FacilityActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  slim: null,
  error: null,
};

export function facilityReducer(state = initialState, action) {
  switch (action.type) {
    // getFacility
    case FacilityActionTypes.GET_FACILITY_START:
      return {
        ...state,
        loading: true,
      };
    case FacilityActionTypes.GET_FACILITY_FINISH:
      console.log(action.response.data);
      return {
        ...state,
        data: action.response.data,
        loading: false,
      };
    case FacilityActionTypes.GET_FACILITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // getFacilitySlim
    case FacilityActionTypes.GET_FACILITY_SLIM_START:
      return {
        ...state,
        loading: true,
      };
    case FacilityActionTypes.GET_FACILITY_SLIM_FINISH:
      return {
        ...state,
        slim: action.response.data,
        loading: false,
      };
    case FacilityActionTypes.GET_FACILITY_SLIM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default: {
      return state;
    }
  }
}
