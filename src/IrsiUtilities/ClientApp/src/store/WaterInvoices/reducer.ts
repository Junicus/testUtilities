import { Reducer } from 'redux';
import { WaterInvoicesState, WaterInvoiceActions, WaterInvoiceActionTypes } from './types';
import { IWaterInvoiceDto } from '../../utils/api/IrsiUtilities';

const initialState: WaterInvoicesState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<WaterInvoicesState, WaterInvoiceActions> = (state = initialState, action) => {
  switch (action.type) {
    case WaterInvoiceActionTypes.GET_WATER_INVOICES_SUCCESS:
      return {
        ...state,
        byId: action.payload.invoices.reduce((a: Record<string, IWaterInvoiceDto>, invoice) => {
          a[invoice.id] = invoice;
          return a;
        }, {}),
        allIds: action.payload.invoices.map((invoice) => invoice.id),
      };
    case WaterInvoiceActionTypes.GET_WATER_INVOICE_SUCCESS:
      if (action.payload.invoice) {
        return {
          ...state,
          byId: { ...state.byId, [action.payload.invoice.id]: action.payload.invoice },
          allIds: state.allIds.includes(action.payload.invoice.id) ? [...state.allIds] : [...state.allIds, action.payload.invoice.id],
        };
      } else {
        return state;
      }
    case WaterInvoiceActionTypes.ADD_WATER_INVOICE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.invoiceId]: action.metadata.invoice },
        allIds: [...state.allIds, action.payload.invoiceId],
      };
    case WaterInvoiceActionTypes.UPDATE_WATER_INVOICE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.metadata.invoice.id]: action.metadata.invoice },
      };
    default:
      return state;
  }
};
