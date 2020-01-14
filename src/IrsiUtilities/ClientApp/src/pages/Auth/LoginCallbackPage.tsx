import React from 'react';
import { useHistory, RouteComponentProps } from 'react-router';
import { CallbackComponent } from 'redux-oidc';

import userManager from '../../store/auth/userManager';

interface LoginCallbackPageProps extends RouteComponentProps {}

export const LoginCallbackPage: React.FC<LoginCallbackPageProps> = ({ history }) => {
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={user => {
        history.push(user.state ? user.state.returnUrl : '/');
      }}
      errorCallback={error => {
        history.push('/');
        console.error(error);
      }}
    >
      <div>Redirecting...</div>
    </CallbackComponent>
  );
};
