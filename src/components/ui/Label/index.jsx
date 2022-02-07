import cn from 'classnames';

import { Text } from '../Text';

import style from './styles.module.scss';

export const Label = ({ children, className, htmlFor, required, ...props }) => {
  return (
    <Text
      tag='label'
      size='small'
      htmlFor={ htmlFor }
      className={ cn(style.label, className) }
      { ...props }
    >
      { children }
      { required ? <span className={ style.labelRequired }>*</span> : null }
    </Text>
  );
};
