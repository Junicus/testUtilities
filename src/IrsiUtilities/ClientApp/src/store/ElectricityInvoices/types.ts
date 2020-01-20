import { ElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';

export interface ElectricityInvoicesState {
  byId: ElectricityInvoicesDictionary;
  allIds: string[];
}

export interface ElectricityInvoicesDictionary {
  [key: string]: ElectricityInvoiceDto;
}

export enum ElectricityInvoiceActionTypes {
  GET_ELECTRICITY_INVOICES = '@@electricity/GET_ELECTRICITY_INVOICES',
  GET_ELECTRICITY_INVOICES_SUCCESS = '@@electricity/GET_ELECTRICITY_INVOICES_SUCCESS',
  GET_ELECTRICITY_INVOICES_FAILED = '@@electricity/GET_ELECTRICITY_INVOICES_FAILED',
}

export interface GetElectricityInvoicesAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES;
}

export interface GetElectricityInvoicesSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS;
  payload: {
    invoices?: ElectricityInvoiceDto[];
  };
}

export interface GetElectricityInvoicesFailedAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_FAILED;
  payload: {
    error: any;
  };
}

export type ElectricityInvoiceActions =
  | GetElectricityInvoicesAction
  | GetElectricityInvoicesSuccessAction
  | GetElectricityInvoicesFailedAction;
