import React, { useEffect, useState } from "react";

import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

import { loginRequest, protectedResources } from "../authConfig";

import { MemberForm } from '../components/member/form';
import { AccountForm } from '../components/accounts/form';
import Steps from '../components/steps';

const HomeContent = React.memo(() => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (account && inProgress === "none") {
      instance.acquireTokenSilent({
        scopes: protectedResources.membersCurrent.scopes,
        account: account
      }).then((response) => {
        localStorage.setItem("token", response.accessToken);
        setAccessToken(response.accessToken);
      }).catch((error) => {
        console.log('HOME ERROR', error);
      });
    }
  }, [account, inProgress, instance, accessToken]);

  return accessToken? (
    <>
      <Steps steps={[<MemberForm />, <AccountForm />]}/>
    </>
    ) : null
});

export const Home = React.memo(() => {
  const authRequest = {
    ...loginRequest
  };

  return (
    <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect} 
      authenticationRequest={authRequest}
    >
      <HomeContent />
    </MsalAuthenticationTemplate>
  )
});

export default Home;