import * as yup from 'yup';

export const schema = yup.object().shape({
  address: yup.string().required('Required').default(''),
  operatingName: yup.string().required('Required').default(''),
  name: yup.string().required('Required').default(''),
  email: yup.string().email().test('or', 'or', function validate(value) {
    if (this.parent.phone || value) {
      return true
    }
    return false;
  }).default(''),
  phone: yup.string().test('or', 'or', function validate(value) {
    if (this.parent.email || value) {
      return true
    }
    return false;
  }).default(''),
});
