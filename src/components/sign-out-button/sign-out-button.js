import React from "react";
import { useMsal } from "@azure/msal-react";

function handleLogout(instance) {
  instance.logoutPopup()
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.error(e);
    });
}

export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Popup</button>
  );
}