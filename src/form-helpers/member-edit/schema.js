import * as yup from 'yup';

export const schema = yup.object().shape({
  avatarUrl: yup.mixed().default(null),
  email: yup.string().email().required('Required').default(''),
  firstName: yup.string().required('Required').default(''),
  lastName: yup.string().required('Required').default(''),
  position: yup.string().max(64).default(''),
  permissions: yup.string().default(''),
});
