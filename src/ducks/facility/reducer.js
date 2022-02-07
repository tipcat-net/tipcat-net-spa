import { FacilityActionTypes } from './action-types';

export const initialState = {
  loading: false,
  data: null,
  error: null,
  addFacility: {
    loading: false,
    error: null,
  },
  addAvatarFacility: {
    loading: false,
    error: null,
  },
};

export function facilityReducer(state = initialState, action) {
  switch (action.type) {
    case FacilityActionTypes.GET_FACILITIES:
      return {
        ...state,
        loading: true,
      };
    case FacilityActionTypes.GET_FACILITIES_FINISH:
      return {
        ...state,
        loading: false,
        data: action.response.data,
      };
    case FacilityActionTypes.GET_FACILITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case FacilityActionTypes.ADD_FACILITY_START:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: true,
        },
      };
    case FacilityActionTypes.ADD_FACILITY_FINISH:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: false,
        },
      };
    case FacilityActionTypes.ADD_FACILITY_ERROR:
      return {
        ...state,
        addFacility: {
          ...state.addFacility,
          loading: false,
          error: action.error,
        },
      };

    case FacilityActionTypes.ADD_AVATAR_FACILITY_START:
      return {
        ...state,
        addAvatarFacility: {
          ...state.addAvatarFacility,
          loading: true,
        },
      };
    case FacilityActionTypes.ADD_AVATAR_FACILITY_FINISH:
      return {
        ...state,
        addAvatarFacility: {
          ...state.addAvatarFacility,
          loading: false,
        },
      };
    case FacilityActionTypes.ADD_AVATAR_FACILITY_ERROR:
      return {
        ...state,
        addAvatarFacility: {
          ...state.addAvatarFacility,
          loading: false,
          error: action.error,
        },
      };

    default: {
      return state;
    }
  }
}
