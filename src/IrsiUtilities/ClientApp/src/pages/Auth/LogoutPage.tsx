import React from 'react';
import userManager from '../../store/Auth/userManager';

export const LogoutPage: React.FC = () => {
  React.useEffect(() => {
    userManager.signoutRedirect();
  }, []);

  return (
    <div>
      <h1>Signing Out...</h1>
    </div>
  );
};
