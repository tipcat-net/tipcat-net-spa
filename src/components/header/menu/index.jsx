import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './styles.module.scss';

export const Menu = ({ open, onClose }) => {
  return (
    <div className={ cn(style.menuWrapper, open ? style.menuWrapperOpen : null) }>
      <ul className={ style.menu }>
        <li>
          <button type="button" onClick={ onClose }>close</button>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
