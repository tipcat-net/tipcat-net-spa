export const selectFacilities = (state) => state.facility.list.data;
export const selectFacilitiesError = (state) => state.facility.list.error;
export const selectFacilitiesLoading = (state) => state.facility.list.loading;

export const selectFacility = (state) => state.facility.detail.data;
export const selectFacilityError = (state) => state.facility.detail.error;
export const selectFacilityLoading = (state) => state.facility.detail.loading;
