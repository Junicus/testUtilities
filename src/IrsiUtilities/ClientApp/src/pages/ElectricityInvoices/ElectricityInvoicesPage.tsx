import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { ElectricityInvoiceActionTypes } from '../../store/ElectricityInvoices/types';
import { KnownActions } from '../../store/types';
import { ElectricityInvoicesTable } from './Tables/ElectricityInvoicesTable';

export const ElectricityInvoicesPage: React.FC = () => {
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES });
  }, [dispatch]);

  return (
    <div style={{ flexGrow: 1 }}>
      <ElectricityInvoicesTable />
    </div>
  );
};
