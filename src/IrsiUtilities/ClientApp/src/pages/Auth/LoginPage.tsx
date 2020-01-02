import React from "react";
import userManager from "../../store/auth/userManager";
import { RouteComponentProps } from "react-router-dom";

interface LoginPageProps extends RouteComponentProps {}

export const LoginPage: React.FC<LoginPageProps> = ({ location }) => {
  React.useEffect(() => {
    userManager.signinRedirect({ data: location.state });
  }, []);

  return (
    <div>
      <h1>Signing In...</h1>
    </div>
  );
};
