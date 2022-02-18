export const getInitialValues = (initialValues, facility) => ({
  ...initialValues,
  id: facility.id,
  address: facility.address,
  accountId: facility.accountId,
  email: facility.email,
  name: facility.name,
  operatingName: facility.operatingName,
  phone: facility.phone,
  sessionEndTime: facility.sessionEndTime.slice(0, 5).replace(':', '.'),
});
