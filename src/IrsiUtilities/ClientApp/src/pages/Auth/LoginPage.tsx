import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import userManager from '../../store/Auth/userManager';

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
