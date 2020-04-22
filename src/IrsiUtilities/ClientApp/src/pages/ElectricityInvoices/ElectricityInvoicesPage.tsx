import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { ElectricityInvoiceActionTypes } from '../../store/ElectricityInvoices/types';
import { KnownActions, AppState } from '../../store/types';
import { ElectricityInvoicesTable } from './Tables/ElectricityInvoicesTable';
import { stringify } from 'querystring';
import { IStoreDto, IElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';
import { StoreActionTypes } from '../../store/Stores/types';

export const ElectricityInvoicesPage: React.FC = () => {
  const invoices = useSelector<AppState, IElectricityInvoiceDto[]>((state) =>
    state.electricityInvoices.allIds.map((id) => state.electricityInvoices.byId[id])
  );
  const stores = useSelector<AppState, Record<string, IStoreDto>>((state) => state.stores.byId);
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES });
    dispatch({ type: StoreActionTypes.GET_STORES });
  }, [dispatch]);

  return (
    <div style={{ flexGrow: 1 }}>
      <ElectricityInvoicesTable invoices={invoices} stores={stores} />
    </div>
  );
};
