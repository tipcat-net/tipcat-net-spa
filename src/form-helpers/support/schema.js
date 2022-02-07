import * as yup from 'yup';

export const schema = yup.object().shape({
  message: yup.string().required('Required').default(''),
  email: yup.string().email().required('Required').default(''),
});
