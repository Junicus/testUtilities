import { IStoreDto } from '../../utils/api/IrsiUtilities';

export interface StoresState {
  byId: Record<string, IStoreDto>;
  allIds: string[];
}

export enum StoreActionTypes {
  GET_STORES = '@@stores/GET_STORES',
  GET_STORES_SUCCESS = '@@stores/GET_STORES_SUCCESS',
  GET_STORES_FAILED = '@@stores/GET_STORES_FAILED',
  GET_STORE = '@@stores/GET_STORE',
  GET_STORE_SUCCESS = '@@stores/GET_STORE_SUCCESS',
  GET_STORE_FAILED = '@@stores/GET_STORE_FAILED',
  ADD_STORE = '@@stores/ADD_STORE',
  ADD_STORE_SUCCESS = '@@stores/ADD_STORE_SUCCESS',
  ADD_STORE_FAILED = '@@stores/ADD_STORE_FAILED',
  UPDATE_STORE = '@@stores/UPDATE_STORE',
  UPDATE_STORE_SUCCESS = '@@stores/UPDATE_STORE_SUCCESS',
  UPDATE_STORE_FAILED = '@@stores/UPDATE_STORE_FAILED',
  DELETE_STORE = '@@stores/DELETE_STORE',
  DELETE_STORE_SUCCESS = '@@stores/DELETE_STORE_SUCCESS',
  DELETE_STORE_FAILED = '@@stores/DELETE_STORE_FAILED',
}

export interface GetStoresAction {
  type: typeof StoreActionTypes.GET_STORES;
}

export interface GetStoresSuccessAction {
  type: typeof StoreActionTypes.GET_STORES_SUCCESS;
  payload: {
    stores: IStoreDto[];
  };
}

export interface GetStoresFailedAction {
  type: typeof StoreActionTypes.GET_STORES_FAILED;
  payload: {
    error: any;
  };
}

export interface GetStoreAction {
  type: typeof StoreActionTypes.GET_STORE;
  payload: {
    storeId: string;
  };
}

export interface GetStoreSuccessAction {
  type: typeof StoreActionTypes.GET_STORE_SUCCESS;
  payload: {
    store?: IStoreDto;
  };
}

export interface GetStoreFailedAction {
  type: typeof StoreActionTypes.GET_STORE_FAILED;
  payload: {
    error: any;
  };
}

export interface AddStoreAction {
  type: typeof StoreActionTypes.ADD_STORE;
  payload: {
    store: IStoreDto;
  };
}

export interface AddStoreSuccessAction {
  type: typeof StoreActionTypes.ADD_STORE_SUCCESS;
  payload: {
    storeId: string;
  };
  metadata: {
    store: IStoreDto;
  };
}

export interface AddStoreFailedAction {
  type: typeof StoreActionTypes.ADD_STORE_FAILED;
  payload: {
    error: any;
  };
}

export interface UpdateStoreAction {
  type: typeof StoreActionTypes.UPDATE_STORE;
  payload: {
    store: IStoreDto;
  };
}

export interface UpdateStoreSuccessAction {
  type: typeof StoreActionTypes.UPDATE_STORE_SUCCESS;
  metadata: {
    store: IStoreDto;
  };
}

export interface UpdateStoreFailedAction {
  type: typeof StoreActionTypes.UPDATE_STORE_FAILED;
  payload: {
    error: any;
  };
}

export interface DeleteStoreAction {
  type: typeof StoreActionTypes.DELETE_STORE;
  payload: {
    storeId: string;
  };
}

export interface DeleteStoreSuccessAction {
  type: typeof StoreActionTypes.DELETE_STORE_SUCCESS;
  metadata: {
    storeId: string;
  };
}

export interface DeleteStoreFailedAction {
  type: typeof StoreActionTypes.DELETE_STORE_FAILED;
  payload: {
    error: any;
  };
}

export type StoreActions =
  | GetStoresAction
  | GetStoresSuccessAction
  | GetStoresFailedAction
  | GetStoreAction
  | GetStoreSuccessAction
  | GetStoreFailedAction
  | AddStoreAction
  | AddStoreSuccessAction
  | AddStoreFailedAction
  | UpdateStoreAction
  | UpdateStoreSuccessAction
  | UpdateStoreFailedAction
  | DeleteStoreAction
  | DeleteStoreSuccessAction
  | DeleteStoreFailedAction;
