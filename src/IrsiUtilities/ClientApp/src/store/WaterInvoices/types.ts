import { WaterInvoiceDto } from "../../utils/api/IrsiUtilities";

export interface WaterInvoicesState {
  byId: WaterInvoicesDictionary;
  allIds: string[];
}

export interface WaterInvoicesDictionary {
  [key: string]: WaterInvoiceDto;
}

export enum WaterInvoiceActionTypes {
  GET_WATER_INVOICES = '@@water/GET_WATER_INVOICES',
  GET_WATER_INVOICES_SUCCESS = '@@water/GET_WATER_INVOICES_SUCCESS',
  GET_WATER_INVOICES_FAILED = '@@water/GET_WATER_INVOICES_FAILED',
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

export type WaterInvoiceActions = GetWaterInvoicesAction | GetWaterInvoicesSuccessAction | GetWaterInvoicesFailedAction;
