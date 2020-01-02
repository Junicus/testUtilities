import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { KnownActions, AppState } from "../types";
import {
  ElectricityInvoicesActions,
  ElectricityInvoicesActionTypes
} from "./types";
import { ElectricityInvoicesClient } from "../../utils/api/IrsiUtilities";
import userManager from "../auth/userManager";
import axios from "axios";
import Axios from "axios";

export const createElectricityInvoicesMiddleware = (): Middleware => {
  return ({
    getState,
    dispatch
  }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (next: Dispatch) => (
    action: KnownActions
  ) => {
    switch (action.type) {
      case ElectricityInvoicesActionTypes.GET_ELECTRICITY_INVOICES: {
        const token = getState().oidc.user?.access_token;
        getElectricityInvoices(token)(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getElectricityInvoices = (token?: string) => async (
  dispatch: Dispatch<ElectricityInvoicesActions>
) => {
  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  });
  const client = new ElectricityInvoicesClient(undefined, axiosInstance);
  client
    .get()
    .then(model => {
      dispatch({
        type: ElectricityInvoicesActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS,
        payload: {
          invoices: model.invoices
        }
      });
    })
    .catch(reason => {
      dispatch({
        type: ElectricityInvoicesActionTypes.GET_ELECTRICITY_INVOICES_FAILED,
        payload: {
          error: reason
        }
      });
    });
};
