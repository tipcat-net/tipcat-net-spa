import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './../../sign-out-button';
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/get-account/">GetAccount</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}

export default Menu;