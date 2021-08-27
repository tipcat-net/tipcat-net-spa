import { useEffect, useState } from "react";

import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";

import { loginRequest, protectedResources } from "../authConfig";
import { callApiWithToken } from "../fetch";

const ApiTestContent = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance, 
   * an array of all accounts currently signed in and an inProgress value 
   * that tells you what msal is currently doing. For more, visit: 
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [apiTestData, setApiTestData] = useState(null);
  
  useEffect(() => {
    if (account && inProgress === "none" && !apiTestData) {
      instance.acquireTokenSilent({
        scopes: protectedResources.apiTest.scopes,
        account: account
      }).then((response) => {
        callApiWithToken(response.accessToken, protectedResources.apiTest.endpoint)
          .then(response => {
            setApiTestData(response)
          });
      }).catch((error) => {
        // in case if silent token acquisition fails, fallback to an interactive method
        if (error instanceof InteractionRequiredAuthError) {
          if (account && inProgress === "none") {
            instance.acquireTokenPopup({ scopes: protectedResources.apiHello.scopes, }).then((response) => {
              callApiWithToken(response.accessToken, protectedResources.apiTest.endpoint)
                .then(response => setApiTestData(response));
            }).catch(error => console.log(error));
          }
        }
      });
    }
  }, [account, inProgress, instance, apiTestData]);
  return (
    <>
      { apiTestData ? <div>{apiTestData}</div> : null }
    </>
  );
};

export const ApiTest = () => {
  const authRequest = {
    ...loginRequest
  };

  return (
    <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect} 
      authenticationRequest={authRequest}
    >
      <ApiTestContent />
    </MsalAuthenticationTemplate>
  )
};

export default ApiTest;