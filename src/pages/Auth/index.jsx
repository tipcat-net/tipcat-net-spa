import { useMsal } from "@azure/msal-react";

import { loginRequest } from './../../authConfig';

export const Auth = () => {
  const { instance } = useMsal();

  instance.loginRedirect(loginRequest)

  return <div>Auth</div>
};

export default Auth;