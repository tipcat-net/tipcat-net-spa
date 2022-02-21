export const getInitialValues = (initialValues, account) => ({
  ...initialValues,
  id: account.id,
  address: account.address,
  operatingName: account.operatingName,
  name: account.name,
  email: account.email,
  phone: account.phone,
  avatarUrl: account.avatarUrl,
  currency: account.currency,
});
