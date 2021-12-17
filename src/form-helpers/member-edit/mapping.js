export const getInitialValues = (initialValues, member) => ({
  ...initialValues,
  id: member.id,
  accountId: member.accountId,
  avatarUrl: member.avatarUrl,
  email: member.email,
  firstName: member.firstName,
  lastName: member.lastName,
  position: member.position ? member.position : '',
});
