import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../components/ui/Icons/';
import { Loupe } from '../../components/ui/Icons/';
import { Arrow } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';

import SignInButton from '../sign-in-button';
import SignOutButton from '../sign-out-button'

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import './header.css';

export const Header = () => {
  return (
    <header>
      <ul>
        <AuthenticatedTemplate>
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
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <li>
            <SignInButton />
          </li>
        </UnauthenticatedTemplate>
      </ul>
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