import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { WaterInvoiceActionTypes } from '../../store/WaterInvoices/types';
import { KnownActions, AppState } from '../../store/types';
import { WaterInvoicesTable } from './Tables/WaterInvoicesTable';
import { IStoreDto, IWaterInvoiceDto } from '../../utils/api/IrsiUtilities';
import { StoreActionTypes } from '../../store/Stores/types';

export const WaterInvoicesPage = () => {
  const invoices = useSelector<AppState, IWaterInvoiceDto[]>((state) =>
    state.waterInvoices.allIds.map((id) => state.waterInvoices.byId[id])
  );
  const stores = useSelector<AppState, Record<string, IStoreDto>>((state) => state.stores.byId);
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: WaterInvoiceActionTypes.GET_WATER_INVOICES });
    dispatch({ type: StoreActionTypes.GET_STORES });
  }, [dispatch]);

  return (
    <div style={{ height: 'calc(100vh - 54px)' }}>
      <WaterInvoicesTable invoices={invoices} stores={stores} />
    </div>
  );
};
