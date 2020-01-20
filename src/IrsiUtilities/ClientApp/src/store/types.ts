import { UserState } from 'redux-oidc';

import { StoresState, StoreActions } from './Stores/types';
import { ElectricityInvoicesState, ElectricityInvoiceActions } from './ElectricityInvoices/types';
import { WaterInvoicesState, WaterInvoiceActions } from './WaterInvoices/types';

export interface AppState {
  stores: StoresState;
  electricityInvoices: ElectricityInvoicesState;
  waterInvoices: WaterInvoicesState;
  oidc: UserState;
}

export type KnownActions = StoreActions | ElectricityInvoiceActions | WaterInvoiceActions;
