import React from "react";
import { RouteComponentProps } from "react-router";
import { SignoutCallbackComponent } from "redux-oidc";

import userManager from "../../store/auth/userManager";

interface LogoutCallbackPageProps extends RouteComponentProps {}

export const LogoutCallbackPage: React.FC<LogoutCallbackPageProps> = ({
  history
}) => {
  return (
    <SignoutCallbackComponent
      userManager={userManager}
      successCallback={() => {
        history.push("/");
      }}
      errorCallback={error => {
        history.push("/");
        console.error(error);
      }}
    >
      <div>Redirecting...</div>
    </SignoutCallbackComponent>
  );
};
