import { createUserManager } from "redux-oidc";
import { UserManagerSettings } from "oidc-client";

const userManagerConfig: UserManagerSettings = {
  authority: "https://localhost:5001",
  client_id: "IrsiUtilities",
  redirect_uri: "https://localhost:5001/authentication/login-callback",
  post_logout_redirect_uri:
    "https://localhost:5001/authentication/logout-callback",
  response_type: "code",
  scope: "IrsiUtilitiesAPI openid profile"
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
