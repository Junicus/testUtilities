import { WaterInvoiceDto, IWaterInvoiceDto } from '../../utils/api/IrsiUtilities';

export interface WaterInvoicesState {
  byId: Record<string, IWaterInvoiceDto>;
  allIds: string[];
}

export enum WaterInvoiceActionTypes {
  GET_WATER_INVOICES = '@@water/GET_WATER_INVOICES',
  GET_WATER_INVOICES_SUCCESS = '@@water/GET_WATER_INVOICES_SUCCESS',
  GET_WATER_INVOICES_FAILED = '@@water/GET_WATER_INVOICES_FAILED',
  GET_WATER_INVOICE = '@@water/GET_WATER_INVOICE',
  GET_WATER_INVOICE_SUCCESS = '@@water/GET_WATER_INVOICE_SUCCESS',
  GET_WATER_INVOICE_FAILED = '@@water/GET_WATER_INVOICE_FAILED',
  ADD_WATER_INVOICE = '@@water/ADD_WATER_INVOICE',
  ADD_WATER_INVOICE_SUCCESS = '@@water/ADD_WATER_INVOICE_SUCCESS',
  ADD_WATER_INVOICE_FAILED = '@@water/ADD_WATER_INVOICE_FAILED',
  UPDATE_WATER_INVOICE = '@@water/UPDATE_WATER_INVOICE',
  UPDATE_WATER_INVOICE_SUCCESS = '@@water/UPDATE_WATER_INVOICE_SUCCESS',
  UPDATE_WATER_INVOICE_FAILED = '@@water/UPDATE_WATER_INVOICE_FAILED',
  DELETE_WATER_INVOICE = '@@water/DELETE_WATER_INVOICE',
  DELETE_WATER_INVOICE_SUCCESS = '@@water/DELETE_WATER_INVOICE_SUCCESS',
  DELETE_WATER_INVOICE_FAILED = '@@water/DELETE_WATER_INVOICE_FAILED',
}

export interface GetWaterInvoicesAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICES;
}

export interface GetWaterInvoicesSuccessAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICES_SUCCESS;
  payload: {
    invoices?: WaterInvoiceDto[];
  };
}

export interface GetWaterInvoicesFailedAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICES_FAILED;
  payload: {
    error: any;
  };
}

export interface GetWaterInvoiceAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICE;
  payload: {
    invoiceId: string;
  };
}

export interface GetWaterInvoiceSuccessAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICE_SUCCESS;
  payload: {
    invoice?: IWaterInvoiceDto;
  };
}

export interface GetWaterInvoiceFailedAction {
  type: typeof WaterInvoiceActionTypes.GET_WATER_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface AddWaterInvoiceAction {
  type: typeof WaterInvoiceActionTypes.ADD_WATER_INVOICE;
  payload: {
    invoice: IWaterInvoiceDto;
  };
}

export interface AddWaterInvoiceSuccessAction {
  type: typeof WaterInvoiceActionTypes.ADD_WATER_INVOICE_SUCCESS;
  payload: {
    invoiceId: string;
  };
  metadata: {
    invoice: IWaterInvoiceDto;
  };
}

export interface AddWaterInvoiceFailedAction {
  type: typeof WaterInvoiceActionTypes.ADD_WATER_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface UpdateWaterInvoiceAction {
  type: typeof WaterInvoiceActionTypes.UPDATE_WATER_INVOICE;
  payload: {
    invoice: IWaterInvoiceDto;
  };
}

export interface UpdateWaterInvoiceSuccessAction {
  type: typeof WaterInvoiceActionTypes.UPDATE_WATER_INVOICE_SUCCESS;
  metadata: {
    invoice: IWaterInvoiceDto;
  };
}

export interface UpdateWaterInvoiceFailedAction {
  type: typeof WaterInvoiceActionTypes.UPDATE_WATER_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export interface DeleteWaterInvoiceAction {
  type: typeof WaterInvoiceActionTypes.DELETE_WATER_INVOICE;
  payload: {
    invoiceId: string;
  };
}

export interface DeleteWaterInvoiceSuccessAction {
  type: typeof WaterInvoiceActionTypes.DELETE_WATER_INVOICE_SUCCESS;
  metadata: {
    invoice: IWaterInvoiceDto;
  };
}

export interface DeleteWaterInvoiceFailedAction {
  type: typeof WaterInvoiceActionTypes.DELETE_WATER_INVOICE_FAILED;
  payload: {
    error: any;
  };
}

export type WaterInvoiceActions =
  | GetWaterInvoicesAction
  | GetWaterInvoicesSuccessAction
  | GetWaterInvoicesFailedAction
  | GetWaterInvoiceAction
  | GetWaterInvoiceSuccessAction
  | GetWaterInvoiceFailedAction
  | AddWaterInvoiceAction
  | AddWaterInvoiceSuccessAction
  | AddWaterInvoiceFailedAction
  | UpdateWaterInvoiceAction
  | UpdateWaterInvoiceSuccessAction
  | UpdateWaterInvoiceFailedAction
  | DeleteWaterInvoiceAction
  | DeleteWaterInvoiceSuccessAction
  | DeleteWaterInvoiceFailedAction;
