import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { ElectricityInvoiceActionTypes } from '../../store/ElectricityInvoices/types';
import { KnownActions } from '../../store/types';

export const ElectricityInvoicesPage = () => {
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICES });
  }, [dispatch]);

  return (
    <div>
      <h1>Electricity Invoices</h1>
    </div>
  );
};
