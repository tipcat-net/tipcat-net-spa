export const authConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: "read:current_user update:current_user_metadata"
};
