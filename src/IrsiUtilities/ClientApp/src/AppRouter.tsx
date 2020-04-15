import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/Auth/LoginPage';
import { LogoutPage } from './pages/Auth/LogoutPage';
import { LoginCallbackPage } from './pages/Auth/LoginCallbackPage';
import { LogoutCallbackPage } from './pages/Auth/LogoutCallbackPage';
import { HomePage } from './pages/Home/HomePage';
import { AuthedRoute } from './components/Router/AuthedRoute';
import { StoresPage } from './pages/Stores/StoresPage';
import { WaterInvoicesPage } from './pages/WaterInvoices/WaterInvoicesPage';
import { ElectricityInvoicesPage } from './pages/ElectricityInvoices/ElectricityInvoicesPage';
import { AddStorePage } from './pages/Stores/AddStorePage';
import { EditStorePage } from './pages/Stores/EditStorePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

export const AppRouter: React.FC = () => {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
  const history = createBrowserHistory({ basename: baseUrl });
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/authentication/login-callback" component={LoginCallbackPage} />
          <Route exact path="/authentication/logout-callback" component={LogoutCallbackPage} />
          <Route exact path="/" component={HomePage} />
          <AuthedRoute exact path="/stores" component={StoresPage} />
          <AuthedRoute exact path="/stores/add" component={AddStorePage} />
          <AuthedRoute exact path="/stores/edit/:id" component={EditStorePage} />
          <AuthedRoute exact path="/water" component={WaterInvoicesPage} />
          <AuthedRoute exact path="/electricity" component={ElectricityInvoicesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
