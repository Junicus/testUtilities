import { Reducer } from 'redux';
import { ElectricityInvoicesState, ElectricityInvoiceActions } from './types';

const initialState: ElectricityInvoicesState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<ElectricityInvoicesState, ElectricityInvoiceActions> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
