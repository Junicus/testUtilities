import { Reducer } from 'redux';
import { ElectricityInvoicesState, ElectricityInvoicesActions } from './types';

const initialState: ElectricityInvoicesState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<ElectricityInvoicesState, ElectricityInvoicesActions> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
