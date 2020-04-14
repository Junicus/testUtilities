import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SignoutCallbackComponent } from 'redux-oidc';

import userManager from '../../store/Auth2/userManager';

interface LogoutCallbackPageProps extends RouteComponentProps {}

export const LogoutCallbackPage: React.FC<LogoutCallbackPageProps> = ({ history }) => {
  return (
    <SignoutCallbackComponent
      userManager={userManager}
      successCallback={(user) => {
        history.push('/');
      }}
      errorCallback={(error) => {
        history.push('/');
        console.error(error);
      }}
    >
      <div>Redirecting...</div>
    </SignoutCallbackComponent>
  );
};
