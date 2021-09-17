import { useField } from 'formik';

import './input.css';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-item">
      <label htmlFor={props.id || props.name} className="form-label">{label}</label>
      <input className="text-input form-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};