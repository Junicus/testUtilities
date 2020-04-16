import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { KnownActions, AppState } from '../types';
import { WaterInvoiceActions, WaterInvoiceActionTypes } from './types';
import { WaterInvoicesClient, IWaterInvoiceDto, CreateWaterInvoiceCommand, UpdateWaterInvoiceCommand } from '../../utils/api/IrsiUtilities';
import userManager from '../Auth/userManager';
import axios from 'axios';

export const createWaterInvoicesMiddleware = (): Middleware => {
  return ({ dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (next: Dispatch) => (action: KnownActions) => {
    switch (action.type) {
      case WaterInvoiceActionTypes.GET_WATER_INVOICES: {
        getWaterInvoices()(dispatch);
        break;
      }
      case WaterInvoiceActionTypes.GET_WATER_INVOICE: {
        getWaterInvoice(action.payload.invoiceId)(dispatch);
        break;
      }
      case WaterInvoiceActionTypes.ADD_WATER_INVOICE: {
        addWaterInvoice(action.payload.invoice)(dispatch);
        break;
      }
      case WaterInvoiceActionTypes.UPDATE_WATER_INVOICE: {
        updateWaterInvoice(action.payload.invoice)(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getWaterInvoices = () => async (dispatch: Dispatch<WaterInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new WaterInvoicesClient();
  client
    .getAll()
    .then((model) => {
      dispatch({
        type: WaterInvoiceActionTypes.GET_WATER_INVOICES_SUCCESS,
        payload: {
          invoices: model.invoices,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: WaterInvoiceActionTypes.GET_WATER_INVOICES_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const getWaterInvoice = (invoiceId: string) => async (dispatch: Dispatch<WaterInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new WaterInvoicesClient();
  client
    .getById(invoiceId)
    .then((model) => {
      dispatch({
        type: WaterInvoiceActionTypes.GET_WATER_INVOICE_SUCCESS,
        payload: {
          invoice: model.invoice,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: WaterInvoiceActionTypes.GET_WATER_INVOICE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const addWaterInvoice = (invoice: IWaterInvoiceDto) => async (dispatch: Dispatch<WaterInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authroization'] = `Bearer ${user?.access_token}`;
  const client = new WaterInvoicesClient();
  client
    .create(CreateWaterInvoiceCommand.fromJS(invoice))
    .then((invoiceId) => {
      dispatch({
        type: WaterInvoiceActionTypes.ADD_WATER_INVOICE_SUCCESS,
        payload: {
          invoiceId,
        },
        metadata: {
          invoice,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: WaterInvoiceActionTypes.ADD_WATER_INVOICE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const updateWaterInvoice = (invoice: IWaterInvoiceDto) => async (dispatch: Dispatch<WaterInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authroization'] = `Bearer ${user?.access_token}`;
  const client = new WaterInvoicesClient();
  client
    .update(UpdateWaterInvoiceCommand.fromJS(invoice))
    .then(() => {
      dispatch({ type: WaterInvoiceActionTypes.UPDATE_WATER_INVOICE_SUCCESS, metadata: { invoice } });
    })
    .catch((reason) => {
      dispatch({ type: WaterInvoiceActionTypes.UPDATE_WATER_INVOICE_FAILED, payload: { error: reason } });
    });
};
