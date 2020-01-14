import { Reducer } from 'redux';
import { StoresState, StoreActions } from './types';

const initialState: StoresState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<StoresState, StoreActions> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
