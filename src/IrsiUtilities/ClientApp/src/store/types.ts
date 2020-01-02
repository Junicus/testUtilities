import { UserState } from "redux-oidc";

import { StoreActions, StoresState } from "./Stores/types";
import {
  ElectricityInvoicesActions,
  ElectricityInvoicesState
} from "./ElectricityInvoices/types";
import {
  WaterInvoicesActions,
  WaterInvoicesState
} from "./WaterInvoices/types";

export interface AppState {
  stores: StoresState;
  electricityInvoices: ElectricityInvoicesState;
  waterInvoices: WaterInvoicesState;
  oidc: UserState;
}

export type KnownActions =
  | StoreActions
  | ElectricityInvoicesActions
  | WaterInvoicesActions;
