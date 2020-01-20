import { Reducer } from 'redux';
import { WaterInvoicesState, WaterInvoiceActions } from './types';

const initialState: WaterInvoicesState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<WaterInvoicesState, WaterInvoiceActions> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
