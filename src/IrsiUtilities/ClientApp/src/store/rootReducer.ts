import { Reducer, combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { reducer as storesReducer } from './Stores/reducer';
import { reducer as electricityInvoicesReducer } from './ElectricityInvoices/reducer';
import { reducer as waterInvoicesReducer } from './WaterInvoices/reducer';
import { AppState, KnownActions } from './types';

export const rootReducer: Reducer<AppState, KnownActions> = combineReducers({
  stores: storesReducer,
  electricityInvoices: electricityInvoicesReducer,
  waterInvoices: waterInvoicesReducer,
  oidc: oidcReducer,
});
