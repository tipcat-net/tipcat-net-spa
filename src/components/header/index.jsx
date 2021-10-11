import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../components/ui/Icons/';
import { Loupe } from '../../components/ui/Icons/';
import { Arrow } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';

import SignInButton from '../sign-in-button';
import SignOutButton from '../sign-out-button'
import LogoGrey from './../../assets/logo_grey.svg';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import style from './styles.module.scss';

export const Header = ({ logo }) => {
  if (logo) {
    return (
      <header className={ style.header }>
        <div className={ style.headerLogo }>
          <img src={ LogoGrey } alt="TipCat" className={ style.headerLogo } />
        </div>
      </header>
    );
  }

  return (
    <header className={ style.header }>
      <AuthenticatedTemplate>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
      </AuthenticatedTemplate>
    </header>
    // <header>
    //   <Button transparent><Arrow /></Button>
    //   <h1 className="">Members</h1>
    //   <Button transparent><Loupe /></Button>
    //   <Button transparent ><Person /></Button>
    // </header>
  );
};

export default Header;