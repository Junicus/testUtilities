import { Reducer } from 'redux';
import { StoresState, StoreActions, StoreActionTypes } from './types';
import { IStoreDto } from '../../utils/api/IrsiUtilities';

const initialState: StoresState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<StoresState, StoreActions> = (state = initialState, action) => {
  switch (action.type) {
    case StoreActionTypes.GET_STORES_SUCCESS:
      return {
        ...state,
        byId: action.payload.stores?.reduce((a: Record<string, IStoreDto>, store) => {
          a[store.id] = store;
          return a;
        }, {}),
        allIds: action.payload.stores?.map((store) => store.id),
      };
    case StoreActionTypes.GET_STORE_SUCCESS:
      if (action.payload.store) {
        return {
          ...state,
          byId: { ...state.byId, [action.payload.store.id]: action.payload.store },
          allIds: state.allIds.includes(action.payload.store.id) ? [...state.allIds] : [...state.allIds, action.payload.store.id],
        };
      } else {
        return state;
      }
    case StoreActionTypes.ADD_STORE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.storeId]: action.metadata.store },
        allIds: [...state.allIds, action.payload.storeId],
      };
    case StoreActionTypes.UPDATE_STORE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.metadata.store.id]: action.metadata.store },
      };
    default:
      return state;
  }
};
