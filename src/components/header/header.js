import React from 'react';
import { Link } from 'react-router-dom';
import SignInButton from './../sign-in-button';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import './header.css';

const Header = () => {
  return (
    <header>
      <ul>
        <AuthenticatedTemplate>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/api-test/">ApiTest</Link>
          </li>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <li>
            <SignInButton />
          </li>
        </UnauthenticatedTemplate>
      </ul>
    </header>
  );
};

export default Header;