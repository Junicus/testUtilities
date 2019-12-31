import * as React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./AppRouter";

import "./custom.css";

import configureStore from "./store/configureStore";
import { OidcProvider } from "redux-oidc";
import userManager from "./store/auth/userManager";

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <AppRouter />
    </OidcProvider>
  </Provider>
);
