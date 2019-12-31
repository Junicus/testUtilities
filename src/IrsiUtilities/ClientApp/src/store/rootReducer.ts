import { Reducer, combineReducers } from "redux";
import { AppState, KnownActions } from "./types";
import { reducer as oidcReducer } from "redux-oidc";

export const rootReducer: Reducer<AppState, KnownActions> = combineReducers({
  oidc: oidcReducer
});
