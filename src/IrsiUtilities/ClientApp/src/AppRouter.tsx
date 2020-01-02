import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import { AuthedRoute } from "./components/Router/AuthedRoute";
import Layout from "./components/Layout";
import { Home } from "./components/Home";
import { LoginPage } from "./pages/Auth/LoginPage";
import { LogoutPage } from "./pages/Auth/LogoutPage";
import { LoginCallbackPage } from "./pages/Auth/LoginCallbackPage";
import { LogoutCallbackPage } from "./pages/Auth/LogoutCallbackPage";
import { StoresPage } from "./pages/Stores/StoresPage";

export const AppRouter: React.FC = () => {
  const baseUrl = document
    .getElementsByTagName("base")[0]
    .getAttribute("href") as string;

  const history = createBrowserHistory({ basename: baseUrl });

  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <AuthedRoute exact path="/stores" component={StoresPage} />
        <Route
          exact
          path="/authentication/login-callback"
          component={LoginCallbackPage}
        />
        <Route
          exact
          path="/authentication/logout-callback"
          component={LogoutCallbackPage}
        />
      </Layout>
    </Router>
  );
};
