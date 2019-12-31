import React from "react";
import { useHistory, RouteComponentProps } from "react-router";
import { CallbackComponent } from "redux-oidc";

import userManager from "../../store/auth/userManager";

interface CallbackPageProps extends RouteComponentProps {}

export const CallbackPage: React.FC<CallbackPageProps> = ({ history }) => {
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={user => {
        console.log("CallbackSuccess:", user);
        history.push(user.state ? user.state.returnUrl : "/");
      }}
      errorCallback={error => {
        history.push("/");
        console.error(error);
      }}
    >
      <div>Redirecting...</div>
    </CallbackComponent>
  );
};
