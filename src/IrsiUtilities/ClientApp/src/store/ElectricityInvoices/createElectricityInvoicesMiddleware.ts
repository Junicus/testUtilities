import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { KnownActions, AppState } from '../types';
import { ElectricityInvoiceActions, ElectricityInvoiceActionTypes } from './types';
import {
  ElectricityInvoicesClient,
  IElectricityInvoiceDto,
  CreateElectricityInvoiceCommand,
  UpdateElectricityInvoiceCommand,
} from '../../utils/api/IrsiUtilities';
import axios from 'axios';
import userManager from '../Auth2/userManager';

export const createElectricityInvoicesMiddleware = (): Middleware => {
  return ({ getState, dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (next: Dispatch) => (action: KnownActions) => {
    switch (action.type) {
      case ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES: {
        getElectricityInvoices()(dispatch);
        break;
      }
      case ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE: {
        getElectricityInvoice(action.payload.invoiceId)(dispatch);
        break;
      }
      case ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE: {
        addElectricityInvoice(action.payload.invoice)(dispatch);
        break;
      }
      case ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE: {
        updateElectricityInvoice(action.payload.invoice)(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getElectricityInvoices = () => async (dispatch: Dispatch<ElectricityInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new ElectricityInvoicesClient();
  client
    .getAll()
    .then((model) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS,
        payload: {
          invoices: model.invoices ?? [],
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const getElectricityInvoice = (invoiceId: string) => async (dispatch: Dispatch<ElectricityInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new ElectricityInvoicesClient();
  client
    .getById(invoiceId)
    .then((model) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE_SUCCESS,
        payload: {
          invoice: model.invoice,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const addElectricityInvoice = (invoice: IElectricityInvoiceDto) => async (dispatch: Dispatch<ElectricityInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authroization'] = `Bearer ${user?.access_token}`;
  const client = new ElectricityInvoicesClient();
  client
    .create(CreateElectricityInvoiceCommand.fromJS(invoice))
    .then((invoiceId) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE_SUCCESS,
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
        type: ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const updateElectricityInvoice = (invoice: IElectricityInvoiceDto) => async (dispatch: Dispatch<ElectricityInvoiceActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authroization'] = `Bearer ${user?.access_token}`;
  const client = new ElectricityInvoicesClient();
  client
    .update(UpdateElectricityInvoiceCommand.fromJS(invoice))
    .then(() => {
      dispatch({ type: ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE_SUCCESS, metadata: { invoice } });
    })
    .catch((reason) => {
      dispatch({ type: ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE_FAILED, payload: { error: reason } });
    });
};
