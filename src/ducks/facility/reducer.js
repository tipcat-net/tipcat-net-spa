import { FacilityActionTypes } from './action-types';

export const initialState = {
  addFacility: {
    loading: false,
    error: null,
  }
};

export function facilityReducer(state = initialState, action) {
  switch (action.type) {
    case FacilityActionTypes.ADD_FACILITY_START:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: true,
        }
      };
    case FacilityActionTypes.ADD_FACILITY_FINISH:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: false,
        }
      };
    case FacilityActionTypes.ADD_FACILITY_ERROR:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: false,
          error: action.error,
        }
      };

    default: {
      return state;
    }
  }
}
