import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { KnownActions, AppState } from '../types';
import { ElectricityInvoiceActions, ElectricityInvoiceActionTypes } from './types';
import { ElectricityInvoicesClient } from '../../utils/api/IrsiUtilities';
import axios from 'axios';

export const createElectricityInvoicesMiddleware = (): Middleware => {
  return ({ getState, dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (next: Dispatch) => (action: KnownActions) => {
    switch (action.type) {
      case ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES: {
        const token = getState().oidc.user?.access_token;
        getElectricityInvoices(token)(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getElectricityInvoices = (token?: string) => async (dispatch: Dispatch<ElectricityInvoiceActions>) => {
  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });
  const client = new ElectricityInvoicesClient(undefined, axiosInstance);
  client
    .get()
    .then(model => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS,
        payload: {
          invoices: model.invoices,
        },
      });
    })
    .catch(reason => {
      dispatch({
        type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};
