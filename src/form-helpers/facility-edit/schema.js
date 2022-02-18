import * as yup from 'yup';

export const schema = yup.object().shape({
  address: yup.string().default(''),
  email: yup.string().email().default(''),
  name: yup.string().required('Required').default(''),
  operatingName: yup.string().default(''),
  phone: yup.string().default(''),
  sessionEndTime: yup.string().min(5).default(''),
});
