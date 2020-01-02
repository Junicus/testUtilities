import { Reducer, combineReducers } from "redux";
import { AppState, KnownActions } from "./types";
import { reducer as oidcReducer } from "redux-oidc";
import { reducer as storesReducer } from "./Stores/reducer";
import { reducer as electricityInvoicesReducer } from "./ElectricityInvoices/reducer";
import { reducer as waterInvoicesReducer } from "./WaterInvoices/reducer";

export const rootReducer: Reducer<AppState, KnownActions> = combineReducers({
  stores: storesReducer,
  electricityInvoices: electricityInvoicesReducer,
  waterInvoices: waterInvoicesReducer,
  oidc: oidcReducer
});
