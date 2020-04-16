import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { WaterInvoiceActionTypes } from '../../store/WaterInvoices/types';
import { KnownActions } from '../../store/types';
import { WaterInvoicesTable } from './Tables/WaterInvoicesTable';

export const WaterInvoicesPage = () => {
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: WaterInvoiceActionTypes.GET_WATER_INVOICES });
  }, [dispatch]);

  return (
    <div style={{ flexGrow: 1 }}>
      <WaterInvoicesTable />
    </div>
  );
};
