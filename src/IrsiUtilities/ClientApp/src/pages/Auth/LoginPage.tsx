import React, { MouseEvent } from "react";
import userManager from "../../store/auth/userManager";
import { RouteComponentProps } from "react-router";

interface LoginPageProps extends RouteComponentProps {}

export const LoginPage: React.FC<LoginPageProps> = ({ location }) => {
  //   const handleLogin: React.EventHandler<MouseEvent> = event => {
  //     event.preventDefault();
  //     userManager.signinRedirect({ data: location.state });
  //   };

  React.useEffect(() => {
    userManager.signinRedirect({ data: location.state });
  }, []);
  
  return (
    <div>
      <h1>Sign In</h1>
      {/* <button onClick={event => handleLogin(event)}>Login</button> */}
    </div>
  );
};
