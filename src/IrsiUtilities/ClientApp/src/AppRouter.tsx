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
import { AddElectricityInvoicePage } from './pages/ElectricityInvoices/AddElectricityInvoicePage';
import { EditElectricityInvoicePage } from './pages/ElectricityInvoices/EditElectricityInvoicePage';
import { AddWaterInvoicePage } from './pages/WaterInvoices/AddWaterInvoicePage';
import { EditWaterInvoicePage } from './pages/WaterInvoices/EditWaterInvoicePage';

export const AppRouter: React.FC = () => {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
  const history = createBrowserHistory({ basename: baseUrl });
  return (
    <div style={{ maxWidth: 1200 }}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/authentication/login-callback" component={LoginCallbackPage} />
            <Route exact path="/authentication/logout-callback" component={LogoutCallbackPage} />
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/stores" component={StoresPage} />
            <Route exact path="/stores/add" component={AddStorePage} />
            <Route exact path="/stores/edit/:id" component={EditStorePage} />
            <Route exact path="/water" component={WaterInvoicesPage} />
            <Route exact path="/water/add" component={AddWaterInvoicePage} />
            <Route exact path="/water/edit/:id" component={EditWaterInvoicePage} />
            <Route exact path="/electricity" component={ElectricityInvoicesPage} />
            <Route exact path="/electricity/add" component={AddElectricityInvoicePage} />
            <Route exact path="/electricity/edit/:id" component={EditElectricityInvoicePage} /> */}
            <AuthedRoute exact path="/stores" component={StoresPage} />
            <AuthedRoute exact path="/stores/add" component={AddStorePage} />
            <AuthedRoute exact path="/stores/edit/:id" component={EditStorePage} />
            <AuthedRoute exact path="/water" component={WaterInvoicesPage} />
            <AuthedRoute exact path="/water/add" component={AddWaterInvoicePage} />
            <AuthedRoute exact path="/water/edit/:id" component={EditWaterInvoicePage} />
            <AuthedRoute exact path="/electricity" component={ElectricityInvoicesPage} />
            <AuthedRoute exact path="/electricity/add" component={AddElectricityInvoicePage} />
            <AuthedRoute exact path="/electricity/edit/:id" component={EditElectricityInvoicePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};
