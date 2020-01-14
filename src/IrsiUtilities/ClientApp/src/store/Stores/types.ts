import { StoreDto } from '../../utils/api/IrsiUtilities';

export interface StoresState {
  byId: StoresDictionary;
  allIds: string[];
}

export interface StoresDictionary {
  [key: string]: StoreDto;
}

export enum StoreActionTypes {
  GET_STORES = '@@stores/GET_STORES',
  GET_STORES_SUCCESS = '@@stores/GET_STORES_SUCCESS',
  GET_STORES_FAILED = '@@stores/GET_STORES_FAILED',
}

export interface GetStoresAction {
  type: typeof StoreActionTypes.GET_STORES;
}

export interface GetStoresSuccessAction {
  type: typeof StoreActionTypes.GET_STORES_SUCCESS;
  payload: {
    stores?: StoreDto[];
  };
}

export interface GetStoresFailedAction {
  type: typeof StoreActionTypes.GET_STORES_FAILED;
  payload: {
    error: any;
  };
}

export type StoreActions = GetStoresAction | GetStoresSuccessAction | GetStoresFailedAction;
