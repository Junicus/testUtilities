import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CallbackComponent } from 'redux-oidc';

import userManager from '../../store/Auth/userManager';

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
