import React, { useEffect, useCallback } from 'react';
import { EditElectricityInvoiceForm } from './Forms/EditElectricityInvoiceForm';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { KnownActions, AppState } from '../../store/types';
import { IElectricityInvoiceDto } from '../../utils/api/IrsiUtilities';
import { ElectricityInvoiceActionTypes } from '../../store/ElectricityInvoices/types';

export function EditElectricityInvoicePage() {
  const match = useRouteMatch<{ id: string }>();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const history = useHistory();

  const invoice = useSelector<AppState, IElectricityInvoiceDto | undefined>((state) => state.electricityInvoices.byId[match.params.id]);

  useEffect(() => {
    dispatch({
      type: ElectricityInvoiceActionTypes.GET_ELECTRICITY_INVOICE,
      payload: {
        invoiceId: match.params.id,
      },
    });
  }, [dispatch, match]);

  const handleElectricityInvoiceUpdate = useCallback(
    (updatedInvoice: IElectricityInvoiceDto) => {
      dispatch({
        type: ElectricityInvoiceActionTypes.UPDATE_ELECTRICITY_INVOICE,
        payload: {
          invoice: updatedInvoice,
        },
      });
      console.log(updatedInvoice);
      history.goBack();
    },
    [dispatch, history]
  );

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>Edit Electricity Invoice</h1>
      {invoice && (
        <div>
          <EditElectricityInvoiceForm initialValues={invoice} onUpdateElectricityInvoice={handleElectricityInvoiceUpdate} />
        </div>
      )}
      {!invoice && (
        <div>
          Didn't find an invoice, <Link to="/electricity">Go To Electricity Invocies</Link>
        </div>
      )}
    </div>
  );
}
