import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import userManager from './auth/userManager';

import { rootReducer } from './rootReducer';
import createOidcMiddleware from 'redux-oidc';
import { createStoresMiddleware } from './Stores/createStoresMiddleware';
import { createElectricityInvoicesMiddleware } from './ElectricityInvoices/createElectricityInvoicesMiddleware';
import { createWaterInvoicesMiddleware } from './WaterInvoices/createWaterInvoicesMiddleware';

export default function configureStore() {
  userManager.events.addSilentRenewError(function(error) {
    console.error(`error while renewing the access token ${error}`);
  });
  const oidcMiddleware = createOidcMiddleware(userManager);
  const storesMiddleware = createStoresMiddleware();
  const electricityInvoicesMiddlewar = createElectricityInvoicesMiddleware();
  const waterInvoicesMiddleware = createWaterInvoicesMiddleware();

  const middleware: Middleware[] = [oidcMiddleware, storesMiddleware, electricityInvoicesMiddlewar, waterInvoicesMiddleware];
  const enhancers = [];

  const windowIfDefined = typeof window === 'undefined' ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers));
}
