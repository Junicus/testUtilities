import { IElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';

export interface ElectricityInvoicesState {
  byId: Record<string, IElectricityInvoiceDto>;
  allIds: string[];
}

export enum ElectricityInvoiceActionTypes {
  GET_ELECTRICITY_INVOICES = '@@electricity/GET_ELECTRICITY_INVOICES',
  GET_ELECTRICITY_INVOICES_SUCCESS = '@@electricity/GET_ELECTRICITY_INVOICES_SUCCESS',
  GET_ELECTRICITY_INVOICES_FAILED = '@@electricity/GET_ELECTRICITY_INVOICES_FAILED',
  GET_ELECTRICITY_INVOICE = '@@electricity/GET_ELECTRICITY_INVOICE',
  GET_ELECTRICITY_INVOICE_SUCCESS = '@@electricity/GET_ELECTRICITY_INVOICE_SUCCESS',
  GET_ELECTRICITY_INVOICE_FAILED = '@@electricity/GET_ELECTRICITY_INVOICE_FAILED',
  ADD_ELECTRICITY_INVOICE = '@@electricity/ADD_ELECTRICITY_INVOICE',
  ADD_ELECTRICITY_INVOICE_SUCCESS = '@@electricity/ADD_ELECTRICITY_INVOICE_SUCCESS',
  ADD_ELECTRICITY_INVOICE_FAILED = '@@electricity/ADD_ELECTRICITY_INVOICE_FAILED',
  UPDATE_ELECTRICITY_INVOICE = '@@electricity/UPDATE_ELECTRICITY_INVOICE',
  UPDATE_ELECTRICITY_INVOICE_SUCCESS = '@@electricity/UPDATE_ELECTRICITY_INVOICE_SUCCESS',
  UPDATE_ELECTRICITY_INVOICE_FAILED = '@@electricity/UPDATE_ELECTRICITY_INVOICE_FAILED',
  DELETE_ELECTRICITY_INVOICE = '@@electricity/DELETE_ELECTRICITY_INVOICE',
  DELETE_ELECTRICITY_INVOICE_SUCCESS = '@@electricity/DELETE_ELECTRICITY_INVOICE_SUCCESS',
  DELETE_ELECTRICITY_INVOICE_FAILED = '@@electricity/DELETE_ELECTRICITY_INVOICE_FAILED',
}

export interface GetElectricityInvoicesAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES;
}

export interface GetElectricityInvoicesSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS;
  payload: {
    invoices: IElectricityInvoiceDto[];
  };
}

export interface GetElectricityInvoicesFailedAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_FAILED;
  payload: {
    error: any;
  };
}

export interface GetElectricityInvoiceAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE;
  payload: {
    invoiceId: string;
  };
}

export interface GetElectricityInvoiceSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE_SUCCESS;
  payload: {
    invoice?: IElectricityInvoiceDto;
  };
}

export interface GetElectricityInvoiceFailedAction {
  type: typeof ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface AddElectricityInvoiceAction {
  type: typeof ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE;
  payload: {
    invoice: IElectricityInvoiceDto;
  };
}

export interface AddElectricityInvoiceSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE_SUCCESS;
  payload: {
    invoiceId: string;
  };
  metadata: {
    invoice: IElectricityInvoiceDto;
  };
}

export interface AddElectricityInvoiceFailedAction {
  type: typeof ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface UpdateElectricityInvoiceAction {
  type: typeof ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE;
  payload: {
    invoice: IElectricityInvoiceDto;
  };
}

export interface UpdateElectricityInvoiceSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE_SUCCESS;
  metadata: {
    invoice: IElectricityInvoiceDto;
  };
}

export interface UpdateElectricityInvoiceFailedAction {
  type: typeof ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface DeleteElectricityInvoiceAction {
  type: typeof ElectricityInvoiceActionTypes.DELETE_ELECTRICITY_INVOICE;
  payload: {
    invoiceId: string;
  };
}

export interface DeleteElectricityInvoiceSuccessAction {
  type: typeof ElectricityInvoiceActionTypes.DELETE_ELECTRICITY_INVOICE_SUCCESS;
  metadata: {
    invoice: IElectricityInvoiceDto;
  };
}

export interface DeleteElectricityInvoiceFailedAction {
  type: typeof ElectricityInvoiceActionTypes.DELETE_ELECTRICITY_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export type ElectricityInvoiceActions =
  | GetElectricityInvoicesAction
  | GetElectricityInvoicesSuccessAction
  | GetElectricityInvoicesFailedAction
  | GetElectricityInvoiceAction
  | GetElectricityInvoiceSuccessAction
  | GetElectricityInvoiceFailedAction
  | AddElectricityInvoiceAction
  | AddElectricityInvoiceSuccessAction
  | AddElectricityInvoiceFailedAction
  | UpdateElectricityInvoiceAction
  | UpdateElectricityInvoiceSuccessAction
  | UpdateElectricityInvoiceFailedAction
  | DeleteElectricityInvoiceAction
  | DeleteElectricityInvoiceSuccessAction
  | DeleteElectricityInvoiceFailedAction;
