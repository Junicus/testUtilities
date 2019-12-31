import { UserState } from "redux-oidc";
import { AnyAction } from "redux";

export interface AppState {
  oidc: UserState;
}

export type KnownActions = AnyAction;
