import { Reducer } from "redux";
import { WaterInvoicesState, WaterInvoicesActions } from "./types";

const initialState: WaterInvoicesState = {
  byId: {},
  allIds: []
};

export const reducer: Reducer<WaterInvoicesState, WaterInvoicesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
