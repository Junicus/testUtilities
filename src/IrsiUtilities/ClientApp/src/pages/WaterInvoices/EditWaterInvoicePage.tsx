import React, { useEffect, useCallback } from 'react';
import { EditWaterInvoiceForm } from './Forms/EditWaterInvoiceForm';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { KnownActions, AppState } from '../../store/types';
import { IWaterInvoiceDto } from '../../utils/api/IrsiUtilities';
import { WaterInvoiceActionTypes } from '../../store/WaterInvoices/types';

export function EditWaterInvoicePage() {
  const match = useRouteMatch<{ id: string }>();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const history = useHistory();

  const invoice = useSelector<AppState, IWaterInvoiceDto | undefined>((state) => state.waterInvoices.byId[match.params.id]);

  useEffect(() => {
    dispatch({
      type: WaterInvoiceActionTypes.GET_WATER_INVOICE,
      payload: {
        invoiceId: match.params.id,
      },
    });
  }, [dispatch, match]);

  const handleWaterInvoiceUpdate = useCallback(
    (updatedInvoice: IWaterInvoiceDto) => {
      dispatch({
        type: WaterInvoiceActionTypes.UPDATE_WATER_INVOICE,
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
    <div style={{ height: 'calc(100vh - 54px)' }}>
      <button onClick={handleBackClick}>Back</button>
      <h1>Edit Water Invoice</h1>
      {invoice && (
        <div>
          <EditWaterInvoiceForm initialValues={invoice} onUpdateWaterInvoice={handleWaterInvoiceUpdate} />
        </div>
      )}
      {!invoice && (
        <div>
          Didn't find an invoice, <Link to="/water">Go To Water Invocies</Link>
        </div>
      )}
    </div>
  );
}
