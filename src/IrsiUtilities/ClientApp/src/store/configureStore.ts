import createOidcMiddleware from 'redux-oidc';
import { Middleware, createStore, applyMiddleware, compose } from 'redux';
import userManager from './Auth2/userManager';
import { rootReducer } from './rootReducer';
import { createStoresMiddleware } from './Stores/createStoresMiddleware';
import { createElectricityInvoicesMiddleware } from './ElectricityInvoices/createElectricityInvoicesMiddleware';
import { createWaterInvoicesMiddleware } from './WaterInvoices/createWaterInvoicesMiddleware';

export const configureStore = () => {
  userManager.events.addSilentRenewError((error) => {
    console.error(`error while renewing the access token ${error}`);
  });
  const oidcMiddleware = createOidcMiddleware(userManager);
  const storesMiddleware = createStoresMiddleware();
  const electricityInvoicesMiddleware = createElectricityInvoicesMiddleware();
  const waterInvoicesMiddleware = createWaterInvoicesMiddleware();

  const middleware: Middleware[] = [oidcMiddleware, storesMiddleware, electricityInvoicesMiddleware, waterInvoicesMiddleware];
  const enhancers = [];

  const windowIfDefined = typeof window === 'undefined' ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers));
};
