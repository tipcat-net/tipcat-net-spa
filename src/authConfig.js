export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_AUTH_CONFIG_CLIENT_ID,
    authority: "https://tipcatnet.b2clogin.com/tipcatnet.onmicrosoft.com/B2C_1_SignInSignUp",
    redirectUri: "/",
    knownAuthorities: ["tipcatnet.b2clogin.com"],
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

export const loginRequest = {
  scopes: ["https://tipcatnet.onmicrosoft.com/d11d6132-3f7f-45ae-91a0-a7085602e9fb/access_as_service_provider"],
  tokenQueryParameters: {
    client_secret: process.env.REACT_APP_AUTH_CONFIG_CLIENT_SECRET
  }
};

export const protectedResources = {
  apiTest: {
    endpoint: "https://api-dev.tipcat.net/api/tests",
    scopes: ["https://tipcatnet.onmicrosoft.com/d11d6132-3f7f-45ae-91a0-a7085602e9fb/access_as_service_provider"],
  },
  membersCurrent : {
    endpoint: "https://api-dev.tipcat.net/api/members/current",
    scopes: ["https://tipcatnet.onmicrosoft.com/d11d6132-3f7f-45ae-91a0-a7085602e9fb/access_as_service_provider"],
  },
}

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com"
};