import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Required').default(''),
  address: yup.string().default(''),
});
