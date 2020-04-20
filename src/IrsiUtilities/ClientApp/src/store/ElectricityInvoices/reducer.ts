import { Reducer } from 'redux';
import { ElectricityInvoicesState, ElectricityInvoiceActions, ElectricityInvoiceActionTypes } from './types';
import { IElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';

const initialState: ElectricityInvoicesState = {
  byId: {},
  allIds: [],
};

export const reducer: Reducer<ElectricityInvoicesState, ElectricityInvoiceActions> = (state = initialState, action) => {
  switch (action.type) {
    case ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES_SUCCESS:
      return {
        ...state,
        byId: action.payload.invoices.reduce((a: Record<string, IElectricityInvoiceDto>, invoice) => {
          a[invoice.id] = invoice;
          return a;
        }, {}),
        allIds: action.payload.invoices.map((invoice) => invoice.id),
      };
    case ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE_SUCCESS:
      if (action.payload.invoice) {
        return {
          ...state,
          byId: { ...state.byId, [action.payload.invoice.id]: action.payload.invoice },
          allIds: state.allIds.includes(action.payload.invoice.id) ? [...state.allIds] : [...state.allIds, action.payload.invoice.id],
        };
      } else {
        return state;
      }
    case ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.invoiceId]: action.metadata.invoice },
        allIds: [...state.allIds, action.payload.invoiceId],
      };
    case ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [action.metadata.invoice.id]: action.metadata.invoice },
      };
    default:
      return state;
  }
};
