import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { KnownActions, AppState } from "../types";
import { WaterInvoicesActions, WaterInvoicesActionTypes } from "./types";
import { WaterInvoicesClient } from "../../utils/api/IrsiUtilities";

export const createWaterInvoicesMiddleware = (): Middleware => {
  return ({ dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (
    next: Dispatch
  ) => (action: KnownActions) => {
    switch (action.type) {
      case WaterInvoicesActionTypes.GET_WATER_INVOICES: {
        getWaterInvoices()(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getWaterInvoices = () => async (
  dispatch: Dispatch<WaterInvoicesActions>
) => {
  const client = new WaterInvoicesClient();
  client
    .get()
    .then(model => {
      dispatch({
        type: WaterInvoicesActionTypes.GET_WATER_INVOICES_SUCCESS,
        payload: {
          invoices: model.invoices
        }
      });
    })
    .catch(reason => {
      dispatch({
        type: WaterInvoicesActionTypes.GET_WATER_INVOICES_FAILED,
        payload: {
          error: reason
        }
      });
    });
};
