export const selectFacilities = (state) => state.facility.data;
export const selectFacilitiesError = (state) => state.facility.error;
export const selectFacilitiesLoading = (state) => state.facility.loading;

export const selectAddFacilityError = (state) => state.facility.addFacility.error;
export const selectAddFacilityLoading = (state) => state.facility.addFacility.loading;

export const selectAddAvatarFacilityError = (state) => state.facility.addAvatarFacility.error;
export const selectAddAvatarFacilityLoading = (state) => state.facility.addAvatarFacility.loading;
