import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { IWaterInvoiceDto, IStoreDto } from '../../../utils/api/IrsiUtilities';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, KnownActions } from '../../../store/types';
import { Dispatch } from 'redux';
import { StoreActionTypes } from '../../../store/Stores/types';

interface EditWaterInvoiceFormProps {
  initialValues: IWaterInvoiceDto;
  onUpdateWaterInvoice: (values: IWaterInvoiceDto) => void;
}

export function EditWaterInvoiceForm({ initialValues, onUpdateWaterInvoice }: EditWaterInvoiceFormProps) {
  const stores = useSelector<AppState, IStoreDto[]>((state) => state.stores.allIds.map((key) => state.stores.byId[key]));
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  useEffect(() => {
    dispatch({
      type: StoreActionTypes.GET_STORES,
    });
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onUpdateWaterInvoice(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit, isSubmitting }) => {
        return (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="invoiceDate">Invoice Date</label>
                <Field name="invoiceDate" type="date" />
                <ErrorMessage name="invoiceDate" />
              </div>
              <div>
                <label htmlFor="invoiceDate">Invoice Number</label>
                <Field name="invoiceNumber" />
                <ErrorMessage name="invoiceNumber" />
              </div>
              <div>
                <label htmlFor="storeId">Store</label>
                <Field as="select" name="storeId">
                  <option />
                  {stores.map((store) => {
                    return (
                      <option key={store.id} value={store.id}>
                        {store.name}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="storeId" />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <Field name="amount" />
                <ErrorMessage name="amount" />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="waterCharge">Water Charge</label>
                <Field name="waterCharge" />
                <ErrorMessage name="waterCharge" />
              </div>
              <div>
                <label htmlFor="stormDrainCharge">Storm Drain Charge</label>
                <Field name="stormDrainCharge" />
                <ErrorMessage name="stormDrainCharge" />
              </div>
              <div>
                <label htmlFor="ccarCharge">CCAR Charge</label>
                <Field name="ccarCharge" />
                <ErrorMessage name="ccarCharge" />
              </div>
              <div>
                <label htmlFor="specialCharge">Special Charge</label>
                <Field name="specialCharge" />
                <ErrorMessage name="specialCharge" />
              </div>
              <div>
                <label htmlFor="fiscalPlanAdjustment">Fiscal Plan Adjustment</label>
                <Field name="fiscalPlanAdjustment" />
                <ErrorMessage name="fiscalPlanAdjustment" />
              </div>
              <div>
                <div>
                  Total: $
                  {(values.waterCharge ? parseFloat(values.waterCharge.toString()) : 0) +
                    (values.stormDrainCharge ? parseFloat(values.stormDrainCharge.toString()) : 0) +
                    (values.ccarCharge ? parseFloat(values.ccarCharge.toString()) : 0) +
                    (values.specialCharge ? parseFloat(values.specialCharge.toString()) : 0) +
                    (values.fiscalPlanAdjustment ? parseFloat(values.fiscalPlanAdjustment.toString()) : 0)}
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="previousRead">Previous Read</label>
                <Field name="previousRead" type="date" />
                <ErrorMessage name="previousRead" />
              </div>
              <div>
                <label htmlFor="currentRead">Current Read</label>
                <Field name="currentRead" type="date" />
                <ErrorMessage name="currentRead" />
              </div>
              <div>
                <label htmlFor="usageDays">Usage Days</label>
                <Field name="usageDays" />
                <ErrorMessage name="usageDays" />
              </div>
              <div>
                <label htmlFor="usage">Usage</label>
                <Field name="usage" />
                <ErrorMessage name="usage" />
              </div>
            </fieldset>
            <div>
              <label htmlFor="readingType">Reading Type</label>
              <Field as="select" name="readingType">
                <option />
                <option value="0">Read</option>
                <option value="1">Estimated</option>
                <option value="2">Adjusted</option>
              </Field>
              <ErrorMessage name="readingType" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
