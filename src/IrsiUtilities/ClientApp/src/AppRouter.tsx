import React from 'react';
import { Router, Route } from 'react-router-dom';
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

export const AppRouter: React.FC = () => {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
  const history = createBrowserHistory({ basename: baseUrl });
  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/authentication/login-callback" component={LoginCallbackPage} />
        <Route exact path="/authentication/logout-callback" component={LogoutCallbackPage} />
        <Route exact path="/" component={HomePage} />
        <AuthedRoute exact path="/stores" component={StoresPage} />
        <AuthedRoute exact path="/water" component={WaterInvoicesPage} />
        <AuthedRoute exact path="/electricity" component={ElectricityInvoicesPage} />
      </Layout>
    </Router>
  );
};
