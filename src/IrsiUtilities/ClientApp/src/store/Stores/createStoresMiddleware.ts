import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { KnownActions, AppState } from '../types';
import { StoreActionTypes, StoreActions } from './types';
import { StoresClient, IStoreDto, CreateStoreCommand, UpdateStoreCommand } from '../../utils/api/IrsiUtilities';
import userManager from '../Auth2/userManager';
import axios from 'axios';

export const createStoresMiddleware = (): Middleware => {
  return ({ dispatch }: MiddlewareAPI<Dispatch<KnownActions>, AppState>) => (next: Dispatch) => (action: KnownActions) => {
    switch (action.type) {
      case StoreActionTypes.GET_STORES: {
        getStores()(dispatch);
        break;
      }
      case StoreActionTypes.GET_STORE: {
        getStore(action.payload.storeId)(dispatch);
        break;
      }
      case StoreActionTypes.ADD_STORE: {
        addStore(action.payload.store)(dispatch);
        break;
      }
      case StoreActionTypes.UPDATE_STORE: {
        updateStore(action.payload.store)(dispatch);
        break;
      }
    }
    next(action);
  };
};

const getStores = () => async (dispatch: Dispatch<StoreActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new StoresClient();
  client
    .getAll()
    .then((model) => {
      dispatch({
        type: StoreActionTypes.GET_STORES_SUCCESS,
        payload: {
          stores: model.stores ?? [],
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: StoreActionTypes.GET_STORES_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const getStore = (storeId: string) => async (dispatch: Dispatch<StoreActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  var client = new StoresClient();
  client
    .getById(storeId)
    .then((model) => {
      dispatch({
        type: StoreActionTypes.GET_STORE_SUCCESS,
        payload: {
          store: model.store,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: StoreActionTypes.GET_STORE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const addStore = (store: IStoreDto) => async (dispatch: Dispatch<StoreActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new StoresClient();
  client
    .create(CreateStoreCommand.fromJS(store))
    .then((storeId) => {
      dispatch({
        type: StoreActionTypes.ADD_STORE_SUCCESS,
        payload: {
          storeId,
        },
        metadata: {
          store,
        },
      });
    })
    .catch((reason) => {
      dispatch({
        type: StoreActionTypes.ADD_STORE_FAILED,
        payload: {
          error: reason,
        },
      });
    });
};

const updateStore = (store: IStoreDto) => async (dispatch: Dispatch<StoreActions>) => {
  var user = await userManager.getUser();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user?.access_token}`;
  const client = new StoresClient();
  client
    .update(UpdateStoreCommand.fromJS(store))
    .then(() => {
      dispatch({ type: StoreActionTypes.UPDATE_STORE_SUCCESS, metadata: { store } });
    })
    .catch((reason) => {
      dispatch({ type: StoreActionTypes.UPDATE_STORE_FAILED, payload: { error: reason } });
    });
};
