import { FacilityActionTypes } from './action-types';

export const initialState = {
  list: {
    loading: false,
    data: null,
    error: null,
  },
  detail: {
    loading: false,
    data: null,
    error: null,
  },
};

export function facilityReducer(state = initialState, action) {
  switch (action.type) {
    // getFacilities
    case FacilityActionTypes.GET_FACILITIES_START:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        }
      };
    case FacilityActionTypes.GET_FACILITIES_FINISH:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.response.data,
        }
      };
    case FacilityActionTypes.GET_FACILITIES_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.error,
        }
      };
    
    // getFacility
    case FacilityActionTypes.GET_FACILITY_START:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true,
        }
      };
    case FacilityActionTypes.GET_FACILITY_FINISH:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          data: action.response.data,
        }
      };
    case FacilityActionTypes.GET_FACILITY_ERROR:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          error: action.error,
        }
      };

    default: {
      return state;
    }
  }
}
