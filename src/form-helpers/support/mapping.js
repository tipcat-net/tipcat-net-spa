export const getInitialValues = (initialValues, currentMember) => ({
  ...initialValues,
  email: currentMember.email,
});
