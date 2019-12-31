import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { Home } from "./components/Home";
import { LoginPage } from "./pages/Auth/LoginPage";
import { CallbackPage } from "./pages/Auth/CallbackPage";
import { StoresPage } from "./pages/Stores/StoresPage";
import { AuthedRoute } from "./components/Router/AuthedRoute";

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
        <AuthedRoute exact path="/stores" component={StoresPage} />
        <Route
          exact
          path="/authentication/login-callback"
          component={CallbackPage}
        />
      </Layout>
    </Router>
  );
};
