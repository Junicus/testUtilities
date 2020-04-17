import React, { Dispatch, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { KnownActions } from '../../store/types';
import { IWaterInvoiceDto } from '../../utils/api/IrsiUtilities';
import { WaterInvoiceActionTypes } from '../../store/WaterInvoices/types';
import { AddWaterInvoiceForm } from './Forms/AddWaterInvoiceForm';

export function AddWaterInvoicePage() {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const handleAddWaterInvoice = useCallback(
    (values: IWaterInvoiceDto) => {
      dispatch({
        type: WaterInvoiceActionTypes.ADD_WATER_INVOICE,
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
    <div style={{ flexGrow: 1 }}>
      <button onClick={handleBackClick}>back</button>
      <h1>Add Water Invoice</h1>
      <AddWaterInvoiceForm onAddWaterInvoice={handleAddWaterInvoice} />
    </div>
  );
}
