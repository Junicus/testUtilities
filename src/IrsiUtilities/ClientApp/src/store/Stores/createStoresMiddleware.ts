import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { KnownActions, AppState } from "../types";
import { StoreActionTypes, StoreActions } from "./types";
import { StoresClient } from "../../utils/api/IrsiUtilities";

export const createStoresMiddleware = (): Middleware => {
  return ({ dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (
    next: Dispatch
  ) => (action: KnownActions) => {
    switch (action.type) {
      case StoreActionTypes.GET_STORES: {
        getStores()(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getStores = () => async (dispatch: Dispatch<StoreActions>) => {
  const client = new StoresClient();
  client
    .get()
    .then(model => {
      dispatch({
        type: StoreActionTypes.GET_STORES_SUCCESS,
        payload: {
          stores: model.stores
        }
      });
    })
    .catch(reason => {
      dispatch({
        type: StoreActionTypes.GET_STORES_FAILED,
        payload: {
          error: reason
        }
      });
    });
};
