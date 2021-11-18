import * as yup from 'yup';

export const member = {
  firstName: yup.string().required('Required').default(''),
  lastName: yup.string().required('Required').default(''),
  email: yup.string().email().required('Required').default(''),
}

export const schema = yup.object().shape(member);
