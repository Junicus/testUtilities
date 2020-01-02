import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { KnownActions, AppState } from "../types";
import {
  ElectricityInvoicesActions,
  ElectricityInvoicesActionTypes
} from "./types";
import { ElectricityInvoicesClient } from "../../utils/api/IrsiUtilities";

export const createElectricityInvoicesMiddleware = (): Middleware => {
  return ({ dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (
    next: Dispatch
  ) => (action: KnownActions) => {
    switch (action.type) {
      case ElectricityInvoicesActionTypes.GET_ELECTRICITY_INVOICES: {
        getElectricityInvoices()(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getElectricityInvoices = () => async (
  dispatch: Dispatch<ElectricityInvoicesActions>
) => {
  const client = new ElectricityInvoicesClient();
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
