import React, { Dispatch, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { KnownActions } from '../../store/types';
import { IElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';
import { ElectricityInvoiceActionTypes } from '../../store/ElectricityInvoices/types';
import { AddElectricityInvoiceForm } from './Forms/AddElectricityInvoiceForm';

export function AddElectricityInvoicePage() {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const handleAddElectricityInvoice = useCallback(
    (values: IElectricityInvoiceDto) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.ADD_ELECTRICITY_INVOICE,
        payload: {
          invoice: values,
        },
      });
      console.log(values);
      history.goBack();
    },
    [dispatch, history]
  );

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div style={{ height: 'calc(100vh - 54px)' }}>
      <button onClick={handleBackClick}>back</button>
      <h1>Add Electricity Invoice</h1>
      <AddElectricityInvoiceForm onAddElectricityInvoice={handleAddElectricityInvoice} />
    </div>
  );
}
