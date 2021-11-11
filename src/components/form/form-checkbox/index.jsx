import cn from 'classnames';

import { Сheckbox } from '../../ui/Checkbox';

import style from './styles.module.scss';

export const FormCheckbox = ({ label, name, className, ...props }) => {
  
  return (
    <div className={ cn(style.formCheckbox, className) }>
      <Сheckbox
        label={ label }
        name={ name}
        { ...props }
      />
    </div>
  );
};
